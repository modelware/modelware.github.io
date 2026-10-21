# Draws the onto:Nexus Forum 2027 art (neural network into knowledge graph) used by the event
# page, flyer, and banner. Seeded, so reruns give the same picture.
#   python3 scripts/event-art.py assets/images/events/onto-nexus-forum-2027-art.svg
import math, random, sys
random.seed(7)
W,H=1200,520
nodes={'Requirement':(1032,90,'above'),'Mission':(818,138,'above'),'Function':(878,338,'below'),'Component':(1083,305,'below'),'Interface':(1005,480,'right')}
o=[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" fill="none">',
'''<!-- The event's art, after the Neurosymbolic Systems Engineering course cover: a dense neural
     network on the left resolves, through dashed edges (proposals, not yet facts), into a sparse
     knowledge graph whose few edges each mean something. Used by the event page, flyer, and banner. -->''',
'<defs>',
'<marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 1 L9 5 L0 9" stroke="#c9d4e6" stroke-width="1.4" fill="none"/></marker>',
'<linearGradient id="cross" x1="560" y1="0" x2="900" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#8b7fe0"/><stop offset="1" stop-color="#3cc0b4"/></linearGradient>',
'<radialGradient id="bloom" cx="0" cy="0" r="1" gradientTransform="translate(300 270) scale(330 250)" gradientUnits="userSpaceOnUse"><stop stop-color="#7d6fd6" stop-opacity=".22"/><stop offset="1" stop-color="#7d6fd6" stop-opacity="0"/></radialGradient>',
'</defs>',
'<rect x="0" y="0" width="640" height="520" fill="url(#bloom)"/>']
# neural network: five layers, dense fan of edges
layers=[(70,7),(190,10),(310,10),(430,8),(560,4)]
pos=[]
for x,n in layers:
    top,bot=(70,450) if n>4 else (150,380)
    ys=[top+(bot-top)*i/(n-1) for i in range(n)]
    pos.append([(x+random.uniform(-6,6),y+random.uniform(-8,8)) for y in ys])
o.append('<g stroke="#8b7fe0" stroke-width="0.8">')
for a,b in zip(pos,pos[1:]):
    for (x1,y1) in a:
        for (x2,y2) in b:
            if random.random()<0.62:
                o.append(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke-opacity="{random.uniform(.10,.30):.2f}"/>')
o.append('</g>')
for li,layer in enumerate(pos):
    for (x,y) in layer:
        r=7 if li==len(pos)-1 else random.choice([4,4.5,5])
        o.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r}" fill="#8b7fe0" fill-opacity="{0.95 if li==len(pos)-1 else random.uniform(.7,.95):.2f}"/>')
# crossing: dashed edges from the output layer into the graph
out=pos[-1]
targets=['Mission','Function','Function','Interface']
o.append('<g stroke="url(#cross)" stroke-width="1.8" stroke-dasharray="9 7" stroke-linecap="round">')
for (x,y),t in zip(out,targets):
    tx,ty,_=nodes[t]
    d=math.hypot(tx-x,ty-y); ux,uy=(tx-x)/d,(ty-y)/d
    o.append(f'<line x1="{x+ux*12:.1f}" y1="{y+uy*12:.1f}" x2="{tx-ux*16:.1f}" y2="{ty-uy*16:.1f}" stroke="#7fa6dc" stroke-opacity=".85"/>')
o.append('</g>')
# knowledge graph, as on the flyer
def edge(a,b,label):
    (x1,y1,_),(x2,y2,_)=nodes[a],nodes[b]
    d=math.hypot(x2-x1,y2-y1); ux,uy=(x2-x1)/d,(y2-y1)/d
    o.append(f'<line x1="{x1+ux*13:.1f}" y1="{y1+uy*13:.1f}" x2="{x2-ux*14:.1f}" y2="{y2-uy*14:.1f}" stroke="#c9d4e6" stroke-opacity="0.9" stroke-width="1.4" marker-end="url(#a)"/>')
    mx,my=(x1+x2)/2,(y1+y2)/2
    ang=math.degrees(math.atan2(y2-y1,x2-x1))
    if ang>90: ang-=180
    if ang<-90: ang+=180
    lx,ly=mx+uy*10,my-ux*10
    o.append(f'<text x="{lx:.1f}" y="{ly:.1f}" transform="rotate({ang:.1f} {lx:.1f} {ly:.1f})" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="15" fill="#aab6cc">{label}</text>')
edge('Requirement','Mission','refines'); edge('Requirement','Function','specifies')
edge('Component','Requirement','satisfies'); edge('Component','Function','performs'); edge('Component','Interface','presents')
for name,(x,y,p) in nodes.items():
    o.append(f'<circle cx="{x}" cy="{y}" r="10" stroke="#3cc0b4" stroke-width="2.2" fill="#0f1d38"/><circle cx="{x}" cy="{y}" r="4" fill="#3cc0b4"/>')
    tx,ty,anc={'above':(x,y-22,'middle'),'left':(x-20,y+6,'end'),'right':(x+20,y+6,'start'),'below':(x,y+34,'middle')}[p]
    o.append(f'<text x="{tx}" y="{ty}" text-anchor="{anc}" font-family="Helvetica, Arial, sans-serif" font-size="19" fill="#fff"><tspan fill="#3cc0b4">se:</tspan>{name}</text>')
o.append('</svg>')
open(sys.argv[1],'w').write('\n'.join(o)+'\n')
