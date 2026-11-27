# Refresh src/data/archive.json and covers from the Luma calendar.
# Usage: python3 scripts/sync-luma.py <dir-with-luma2/items.json> . ; fetch items.json from
# https://api.lu.ma/calendar/get-items?calendar_api_id=cal-y8ergaqNQm9K33Z&period=past&pagination_limit=100
import json, re, sys, os, ssl, urllib.request
S, R = sys.argv[1], sys.argv[2]
d = json.load(open(S + '/luma2/items.json'))
# Events to include, by Luma slug or external URL fragment. Curated ones in past.ts are skipped.
include = {
 '27j4rqhc','2ey39tj9','0dn16jez','qa7215mw','94qpoz24','f1zwpdxa','wk7ytc8e','1l7l1djc','hzcj5hvw','co725pvq',
 'bzac31ix','7jevkhjq','2dhjlup3','6rb5jaa5','xy6nnhyc','i9kvlwrj','x59j5rc7','7d23c4en','7sv2v1jh','pgsut2d7',
 '5v2tqa5o','lidh5kzk','2utdpqr4','sevenrooms.com/experiences/volta/sant-joan','eventbrite.com/e/1992336561287',
 'mkpotterystudio.com/workshops/kiln-opening',
}
# Kevin's home and private addresses: show the neighbourhood only
hood = {'Carrer del Comerç, 11': 'El Born', 'C/ del Comerç, 11': 'El Born', 'Carrer de València, 177, 1 3d': 'Eixample',
        'Passeig de Picasso, 26': 'Borneta, El Born', 'Passeig de Picasso, 26, 30': 'Borneta, El Born', 'Borneta': 'Borneta, El Born',
        'Barcelona, Catalunya': 'Barcelona', 'Barcelona, Cataluña': 'Barcelona', 'Amsterdam-West': 'Amsterdam'}
kinds = {
 'brunch': ('Brunch', 'Brunch', 'Brunch'), 'wine': ('Wine tasting', 'Cata de vino', 'Tast de vi'), 'community': ('Community', 'Comunidad', 'Comunitat'),
 'collab': ('Collaboration', 'Colaboración', 'Col·laboració'), 'supper': ('Supper club', 'Supper club', 'Supper club'), 'networking': ('Networking', 'Networking', 'Networking'),
 'workshop': ('Workshop', 'Taller', 'Taller'),
}
def kind(name, hosts):
    n = name.lower()
    if 'creative mezze' in n or 'earth wind' in n: return 'supper'
    if 'brunch' in n: return 'brunch'
    if 'networking' in n or 'conversations for the curious' in n: return 'networking'
    if 'juneteenth' in n: return 'community'
    if 'pottery' in n or 'kiln' in n: return 'workshop'
    if 'tasting' in n or 'wine casino' in n: return 'wine'
    if any(h in ('Hotel Borneta',) for h in hosts) or 'volta' in n or 'sant joan' in n: return 'collab'
    return 'supper'
ctx = ssl.create_default_context(cafile='/root/.ccr/ca-bundle.crt')
op = urllib.request.build_opener(urllib.request.ProxyHandler(), urllib.request.HTTPSHandler(context=ctx))
out = []
for e in d['entries']:
    ev = e['event']; url = ev['url']
    key = next((k for k in include if k == url or k in url), None)
    if not key: continue
    hosts = [h['name'] for h in e.get('hosts', [])]
    g = ev.get('geo_address_info') or {}
    place = g.get('address') or g.get('city_state') or 'Barcelona'
    place = hood.get(place, place)
    name = re.sub(r'[\U0001F000-\U0001FFFF☀-➿️]+', '', ev['name']).strip(' |')
    name = re.sub(r'^SOLD OUT:\s*', '', name)
    name = re.sub(r'\s{2,}', ' ', name).replace(' )', ')')
    full = url if url.startswith('http') else f'https://luma.com/{url}'
    slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')[:40] + '-' + ev['start_at'][:7]
    img = None
    cover = e.get('cover_url') or ev.get('cover_url')
    if cover:
        u = 'https://images.lumacdn.com/cdn-cgi/image/format=jpeg,fit=cover,quality=82,width=600,height=600/' + cover.replace('https://images.lumacdn.com/', '')
        for attempt in (u, cover):
            try:
                req = urllib.request.Request(attempt, headers={'User-Agent': 'Mozilla/5.0', 'Referer': 'https://luma.com/'})
                data = op.open(req, timeout=60).read()
                open(f'{R}/src/assets/archive/{slug}.jpg', 'wb').write(data); img = slug; break
            except Exception as x: print('cover fail', name, attempt[:60], x)
    else:
        print('no cover', name)
    k = kind(ev['name'], hosts)
    # Start date in Barcelona time
    from datetime import datetime, timezone, timedelta
    st = datetime.fromisoformat(ev['start_at'].replace('Z', '+00:00')).astimezone(timezone(timedelta(hours=1)))
    out.append({'date': st.strftime('%Y-%m-%d'), 'title': name, 'kind': kind and k, 'place': place,
                'with': ', '.join(h for h in hosts if h != 'Kevin Hawkins') or None, 'url': full, 'image': img})
out.sort(key=lambda x: x['date'], reverse=True)
json.dump({'kinds': kinds, 'events': out}, open(f'{R}/src/data/archive.json', 'w'), ensure_ascii=False, indent=1)
for o in out: print(o['date'], o['kind'], o['title'][:60], '|', o['place'], '|', o['with'], '| img' if o['image'] else '| NO IMG')
print(len(out))
