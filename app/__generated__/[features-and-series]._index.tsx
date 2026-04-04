/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Box as Box, Text as Text, Button as Button, Slot as Slot, Image as Image, Link as Link, Heading as Heading } from "@webstudio-is/sdk-components-react";
import { NavigationMenu as NavigationMenu, NavigationMenuList as NavigationMenuList, NavigationMenuItem as NavigationMenuItem, NavigationMenuLink as NavigationMenuLink, NavigationMenuViewport as NavigationMenuViewport } from "@webstudio-is/sdk-components-react-radix";


      export const projectId = "f45435c4-b60f-4fe6-9efb-1e39122ed46d";

      export const lastPublished = "2026-04-04T18:56:12.905Z";

      export const siteName = "Brent Sauls, ICLS";

      export const breakpoints = [{"id":"1PzfdKe46bgQarIwwvn1S"},{"id":"QZKELh-sLTAkGs0YQvzxi","maxWidth":991},{"id":"1skrlEkZQrwd1WIhd9l54","maxWidth":767},{"id":"v1g93df1K9Biyun3Ut6sA","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "1_1_prZvg7DS8pRKyZGQa7XGB.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["InterVariable_4TW-IXN5Z_oy2prFWKBaA.ttf"]

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
return <body
className={`w-element`}>
<Box
className={`w-box`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<script>\n// Determine theme and apply it\n(function () {\n  const root = document.documentElement;\n  const saved = localStorage.getItem('website-theme');\n  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n  const theme = saved === 'dark' || saved === 'light' ? saved : 'auto';\n\n  const resolvedTheme = theme === 'dark' ? 'dark' :\n                        theme === 'light' ? 'light' :\n                        prefersDark ? 'dark' : 'light';\n\n  root.setAttribute('website-theme', resolvedTheme);\n\n  if (!saved) localStorage.setItem('website-theme', 'auto');\n})();\n\n// Listen to OS theme changes\nwindow.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {\n  const saved = localStorage.getItem('website-theme');\n  if (saved === 'auto' || !saved) {\n    const newTheme = e.matches ? 'dark' : 'light';\n    document.documentElement.setAttribute('website-theme', newTheme);\n    if (typeof updateSwitcher === 'function') updateSwitcher(newTheme);\n  }\n});\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<!-- Dark Theme CSS (Craft)-->\n<style>\nhtml[website-theme=\"dark\"], .dark-theme {\n\n--foreground-primary: var(--gray-1);\n--foreground-secondary: var(--gray-6);\n--foreground-accent: var(--indigo-1);\n--foreground-muted: var(--gray-8);\n--foreground-border: var(--gray-9);\n--foreground-tertiary: var(--yellow-12);\n--foreground-quaternary: var(--red-2);\n\n--background-primary: var(--black);\n--background-secondary: var(--gray-9);\n--background-accent: var(--camo-3);\n--background-card: var(--indigo-12);  \n--background-tertiary: var(--yellow-8);\n--background-quaternary: var(--red-10);\n  \n--focus-color:var(--indigo-10);\n\n}\n\nbutton[website-theme].active {\n  background: var(--background-accent);\n  color: var(--foreground-accent);\n}\n</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>\nhtml[website-theme=\"dark\"] .logo-dark {\n  display: block;\n}\n\nhtml[website-theme=\"dark\"] .logo-light {\n  display: none;\n}\n\nhtml[website-theme=\"light\"] .logo-dark {\n  display: none;\n}\n\nhtml[website-theme=\"light\"] .logo-light {\n  display: block;\n}\n\n/* AUTO MODE */\n@media (prefers-color-scheme: dark) {\n  html[website-theme=\"auto\"] .logo-dark {\n    display: block;\n  }\n\n  html[website-theme=\"auto\"] .logo-light {\n    display: none;\n  }\n}\n\n@media (prefers-color-scheme: light) {\n  html[website-theme=\"auto\"] .logo-dark {\n    display: none;\n  }\n\n  html[website-theme=\"auto\"] .logo-light {\n    display: block;\n  }\n}\n</style>"}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
<Box
data-ws-tag="main"
className={`w-box c1rw6c5s c1b7vdjs c10lhp00 c1mqjxyf cj3k90b cuoslab cljh1ft cmfxt4w cvyfkwx c1fx1pd6 c1j2bm5z cnj9wpl c1cdol2d c1tnzgch c1whyfkr cokxbbv c12t7elq c1e4a3o9`}>
<div
className={`w-element cneeidw c1uotjrc c1oyzb63 cimp2t3 c149hh94 c1p1dooo c43jh65 cz2lpon`}>
<Slot>
<Fragment_1>
<div
className={`w-element c53uwo8`}>
<div
className={`w-element`}>
<Image
src={"/assets/1_rQLbJRLeBzRI9JMzWBP5w.png"}
width={1600}
height={468}
alt={""}
className={`w-image ${"logo-dark"}`} />
<Image
src={"/assets/logolight-cropped_(1)_fgAKxMkMVSGSZqKsorRw9.svg"}
width={1282}
height={383}
alt={""}
className={`w-image cye78ef ${"logo-light"}`} />
</div>
<NavigationMenu
className={`w-navigation-menu c7zyj9q clpmj7m cd9ig70`}>
<NavigationMenuList
className={`w-menu-list clhuwdh c147mqlg c14qbsy crzox0h c1citdtb ch5o2yb cqe1wte cxcl7rd cxg0iaa cucw341 c1xmeuo0 c1p1dooo c149hh94 c15avqat c9qbqbd cimp2t3 c1bfrgf5 c1m5zhuq cw5l2bg c1p4l0wg cpexfyi`}>
<NavigationMenuItem
data-ws-index="0"
className={`w-menu-item c1whyfkr`}>
<NavigationMenuLink>
<Link
href={"/about"}
target={"_self"}
className={`w-link czeg2mj cucw341 c1xmeuo0 c5wifrb ce1h5oe cmvmmy3 c1rey2l1 c1ohilfq c1ewqzn1 c1fqtln1 cm0c7va cck35sq clhuwdh c1xjoouu c14qbsy c1k2iu9j clyrfez cueqn9e c1sb7a4l c1rm1a04 cwjb50k c77rn62 c1aan3d7 c117yiv1 cdou2ti c17dkkp2`}>
{"About"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="1"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
target={"_self"}
href={"/features-and-series"}
prefetch={"none"}
className={`w-link czeg2mj cucw341 c1xmeuo0 c5wifrb ce1h5oe cmvmmy3 c1rey2l1 c1ohilfq c1ewqzn1 c1fqtln1 cm0c7va cck35sq clhuwdh c1xjoouu c14qbsy c1k2iu9j clyrfez cueqn9e c1whyfkr c1sb7a4l c1rm1a04 cwjb50k c77rn62 c1aan3d7 c117yiv1 cdou2ti c17dkkp2`}>
{"Features & Series"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="2"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
target={"_self"}
href={"/commercials"}
className={`w-link czeg2mj cucw341 c1xmeuo0 c5wifrb ce1h5oe cmvmmy3 c1rey2l1 c1ohilfq c1ewqzn1 c1fqtln1 cm0c7va cck35sq clhuwdh c1xjoouu c14qbsy c1k2iu9j clyrfez cueqn9e c1whyfkr c1sb7a4l c1rm1a04 cwjb50k c77rn62 c1aan3d7 c117yiv1 cdou2ti c17dkkp2`}>
{"Commercials"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="3"
className={`w-menu-item c1whyfkr`}>
<NavigationMenuLink>
<Link
href={"mailto:sandi-lee@tankcrew.co.za"}
className={`w-link czeg2mj cucw341 c1xmeuo0 c5wifrb ce1h5oe cmvmmy3 c1rey2l1 c1ohilfq c1ewqzn1 c1fqtln1 cm0c7va cck35sq clhuwdh c1xjoouu c14qbsy c1k2iu9j clyrfez cueqn9e c1sb7a4l c1rm1a04 cwjb50k c77rn62 c1aan3d7 c117yiv1 cdou2ti c17dkkp2`}>
{"Contact"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
</NavigationMenuList>
<Box
className={`w-box c2j3e66 c1c6mlva c1n4vbh1 c1rw6c5s c1xmeuo0`}>
<NavigationMenuViewport
className={`w-menu-viewport c7zyj9q c1jseu2l c1tntlgj c1e68lpf ce1h5oe cmvmmy3 c1rey2l1 c1ohilfq clr9ieh c40sq8e c1h9on1u cgfjj7c cyv4n3r crotd86`} />
</Box>
</NavigationMenu>
<Slot>
<Fragment_1>
<Box
className={`w-box cerqxn6 cylk4iu c1aqi6xk c1nrn79d c4myuoz c1xj1ae8 c1vxk5tx c1619o6x c1izab5s cggmto8 c17pywfy cugnx7e c1rw6c5s c10lhp00 c1xmeuo0 c13nzd84 c9t5p0i c138uecn c7zyj9q cwjkv5a`}>
<Box
className={`w-box c2j3e66 c1628sxu c18d8azv c9lp9it cmupvqz cnj9wpl c30qvo4 c19w81q9`} />
<Button
website-theme={"light"}
type={"button"}
className={`w-button c8tew8b c7lrsty cjmyn1r c1y1izo3 cuukyfn czeg2mj ciyivj9 c1r2ja15 c8r7uim c1knl6ln cxpdco5 cb57f18 cp4zlc8 cucw341 c1xmeuo0 c1uh55lj c7zyj9q cst2mrs`}>
{"Light.Work"}
</Button>
<Button
website-theme={"dark"}
type={"button"}
className={`w-button c8tew8b c7lrsty cjmyn1r c1y1izo3 cuukyfn czeg2mj ciyivj9 c1r2ja15 c8r7uim c1knl6ln cxpdco5 cb57f18 cp4zlc8 cucw341 c1xmeuo0 c1uh55lj c7zyj9q cst2mrs`}>
{"Shadow.Work"}
</Button>
<Button
website-theme={"auto"}
type={"button"}
className={`w-button c8tew8b c7lrsty cjmyn1r c1y1izo3 cuukyfn czeg2mj ciyivj9 c1r2ja15 c8r7uim c1knl6ln cxpdco5 cb57f18 cp4zlc8 cucw341 c1xmeuo0 c1uh55lj c7zyj9q cst2mrs`}>
{"Auto"}
</Button>
</Box>
</Fragment_1>
</Slot>
</div>
</Fragment_1>
</Slot>
<div
className={`w-element`}>
<Box
className={`w-box c16ve6fr cmgv3df c11mvtry c4a4m5l c7zyj9q c8zo62r cpvjg0a c8tew8b c7lrsty cjmyn1r c1y1izo3 cuukyfn c1sylc6x cskrw1d c1lacmp7 c1mfxk51 c1qp4wjy c1idrzyd cm0ufbg c1hrvr8b c1q776nx cl3j00a c2oby3n cnv9txi`}>
<Slot>
<Fragment_1>
<Heading
data-ws-tag="h1"
className={`w-heading cwa7i6t cb1w19d cpu4pf cuihiqb c1whyfkr cga6hw7`}>
{"Brent Sauls, ICLS"}
</Heading>
<Heading
data-ws-tag="h3"
className={`w-heading cm0c7va cj8vz1m c1l2kbum c1uh55lj clhuwdh c1whyfkr c1vjchs4 c1qjux00`}>
<b
className={`w-element`}>
{"Gaffer, Rigging Gaffer"}
</b>
</Heading>
<Box
className={`w-box c1citdtb cucw341 c1mqjxyf c149hh94 c1p1dooo c15avqat c9qbqbd cimp2t3 c1whyfkr cyfbjju cmu33gf c18hjjc`}>
<p
className={`w-element`}>
<i
className={`w-element`}>
{"Light.Work / Shadow.Work"}
</i>
</p>
<p
className={`w-element`}>
<b
className={`w-element`}>
{"Finding Light. Honoring the Shadow."}
</b>
{""}
<br />
{""}
<b
className={`w-element`}>
{"Every story lives in Contrast."}
</b>
</p>
<p
className={`w-element`}>
<b
className={`w-element`}>
{"Driven by passion. Grounded in craft."}
</b>
</p>
<p
className={`w-element`}>
<b
className={`w-element`}>
{"I love working with people who care deeply about what they do — and helping them bring their vision to life through light. Every frame is shaped through discipline, teamwork, and trust — because truth lives in contrast."}
</b>
</p>
</Box>
</Fragment_1>
</Slot>
<Box
className={`w-box c1citdtb cucw341 c1mqjxyf c149hh94 c1p1dooo c15avqat c9qbqbd cimp2t3 c1whyfkr cyfbjju cmu33gf c18hjjc`}>
<p
className={`w-element`}>
<span
className={`w-element`}>
<b
className={`w-element`}>
{"Brent’s long-form work spans action, drama, historical narrative, sci-fi, and documentary storytelling — from intimate character pieces to large-scale international productions. His lighting approach integrates effortlessly with camera, grip, and production teams, supporting cinematographers with clarity, adaptability, and seamless execution across Main, Rigging, 2nd Unit, and VFX Unit work."}
</b>
</span>
</p>
</Box>
<Box
className={`w-box`}>
<HtmlEmbed
code={"<style>\n  [dv-lightbox=\"open\"] {\n            display: flex;\n            opacity: 1;\n            justify-content: center;\n            align-items: center;\n        }\n</style>\n"}
className={`w-html-embed`} />
<Box
className={`w-box`}>
<Box
dv-lightbox-gallery={""}
className={`w-box cneeidw cnlp5q9 c1wa1xj8 c1jyd95o ccm46o9 clt29mm cyfbjju`}>
{Object.entries(
  // @ts-ignore
  [{"image":"https://media.themoviedb.org/t/p/original/261fvNbRB78p14bAERDqOrFtZ8J.jpg","alt":"African Queens: Njinga (2023) | Netflix Limited Series | Gaffer | DP: Kabelo Thathe SASC | Emmy-nominated for Best Cinematography"},{"image":"https://media.themoviedb.org/t/p/original/TVvIyCsFCmLk9MRLbAZi4X8f32.jpg","alt":"Sniper: The Last Stand (2025) | Feature Film | Gaffer | DP: Trevor Calverley SASC"},{"image":"https://media.themoviedb.org/t/p/original/A5fYyKH3A7KvbBk9zhVLKCvELIE.jpg","alt":"Devil's Peak (2022) | Series / Drama | Gaffer | DP: Ivan Strasberg BSC"},{"image":"https://media.themoviedb.org/t/p/original/cyn395RyxeP64T6jEgOGE4K7O46.jpg","alt":"Wild Is the Wind (2022) | Feature Film | Gaffer | DP: Bert Haitsma"},{"image":"https://media.themoviedb.org/t/p/original/gtJVqPfax61940ak6k94F3D6Klh.jpg","alt":"The Brave Ones (2021) | Netflix Series | Gaffer | DPs: Kabelo Thathe SASC, Motheo Moeng SASC"},{"image":"https://media.themoviedb.org/t/p/original/m1b25HAMLNYxIhN7Sd68vYh9mvA.jpg","alt":"Deep End (2018) | Feature Film | Gaffer | DP: Ebrahim Hajee SASC"},{"image":"https://media.themoviedb.org/t/p/original/2JqYImXTQJ90BWYzMSbhMrnufcC.jpg","alt":"Griekwastad (2019) | Feature Film | Gaffer | DP: Jozua Malherbe"},{"image":"https://media.themoviedb.org/t/p/original/heqehuEfbg2283Z9hFmsVuv3UE3.jpg","alt":"Tiger House (2014) | Feature Film | Gaffer | DP: Willie Nel SASC"}] ?? {}
).map(([_key, collectionItem]: any) => {
  const index = Array.isArray([{"image":"https://media.themoviedb.org/t/p/original/261fvNbRB78p14bAERDqOrFtZ8J.jpg","alt":"African Queens: Njinga (2023) | Netflix Limited Series | Gaffer | DP: Kabelo Thathe SASC | Emmy-nominated for Best Cinematography"},{"image":"https://media.themoviedb.org/t/p/original/TVvIyCsFCmLk9MRLbAZi4X8f32.jpg","alt":"Sniper: The Last Stand (2025) | Feature Film | Gaffer | DP: Trevor Calverley SASC"},{"image":"https://media.themoviedb.org/t/p/original/A5fYyKH3A7KvbBk9zhVLKCvELIE.jpg","alt":"Devil's Peak (2022) | Series / Drama | Gaffer | DP: Ivan Strasberg BSC"},{"image":"https://media.themoviedb.org/t/p/original/cyn395RyxeP64T6jEgOGE4K7O46.jpg","alt":"Wild Is the Wind (2022) | Feature Film | Gaffer | DP: Bert Haitsma"},{"image":"https://media.themoviedb.org/t/p/original/gtJVqPfax61940ak6k94F3D6Klh.jpg","alt":"The Brave Ones (2021) | Netflix Series | Gaffer | DPs: Kabelo Thathe SASC, Motheo Moeng SASC"},{"image":"https://media.themoviedb.org/t/p/original/m1b25HAMLNYxIhN7Sd68vYh9mvA.jpg","alt":"Deep End (2018) | Feature Film | Gaffer | DP: Ebrahim Hajee SASC"},{"image":"https://media.themoviedb.org/t/p/original/2JqYImXTQJ90BWYzMSbhMrnufcC.jpg","alt":"Griekwastad (2019) | Feature Film | Gaffer | DP: Jozua Malherbe"},{"image":"https://media.themoviedb.org/t/p/original/heqehuEfbg2283Z9hFmsVuv3UE3.jpg","alt":"Tiger House (2014) | Feature Film | Gaffer | DP: Willie Nel SASC"}]) ? Number(_key) : _key;
  return (
<Fragment key={index}>
<Box
className={`w-box c1tntlgj c1e68lpf cwyl4m`}>
<Box
className={`w-box c1aiwwt5 c1aot3b4 c1mgvtyn c1il4ydm cqleu2u c1tntlgj c1e68lpf c15dxqea`}>
<Image
src={collectionItem?.image}
loading={"eager"}
width={800}
height={1200}
alt={collectionItem?.alt}
className={`w-image cnj9wpl c30qvo4 cc1bmgc`} />
</Box>
</Box>
</Fragment>
)
})
}
</Box>
<Box
dv-lightbox={""}
className={`w-box cns1p6l cmupvqz c1628sxu cnj9wpl c30qvo4 cjf417m cp2f8hz cucw341 c1xmeuo0 cye78ef clq0lq0 c1aus8gd c12njp1 cafhzr0 c101c896 c1lyekh4 c17wz2eh c1jq31f3`}>
<Button
type={"button"}
dv-lightbox-close-button={""}
className={`w-button czeg2mj cucw341 c1xmeuo0 c2j3e66 c8glfzr c1lweosj c1867ngr c5wifrb c13ezfy3 c2tkczq c1ouctu1 c1diqp5q cdkhpeb cwyl4m c1itpbng`}>
<HtmlEmbed
code={"<svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z\" fill=\"currentColor\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"></path></svg>"}
className={`w-html-embed`} />
</Button>
<Box
className={`w-box c1rw6c5s c17f34ye cucw341 c1xmeuo0 c7zyj9q c16ve6fr c1e5tzf7 cubj2ix cqfg4ub`}>
<Box
className={`w-box c1rw6c5s cucw341 c1xmeuo0 cz2lpon`}>
<Button
type={"button"}
dv-lightbox-prev-button={""}
className={`w-button c1rw6c5s c5wifrb c13ezfy3 c2tkczq c1ouctu1 c1diqp5q cdkhpeb cwyl4m c1itpbng`}>
<HtmlEmbed
code={"<svg width=\"24\" height=\"24\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z\" fill=\"currentColor\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"></path></svg>"}
className={`w-html-embed`} />
</Button>
</Box>
<Box
className={`w-box c1rw6c5s c1b7vdjs cucw341`}>
<Box
className={`w-box c16ve6fr cubj2ix c1hsnan4 c1n6c0o5 c1dfr0yt c1aot3b4 c1mgvtyn c1il4ydm cqleu2u c15dxqea`}>
<Image
id={"dv-lightbox-image"}
className={`w-image c16ve6fr cubj2ix c1hsnan4 c5mr45x celqc5l cyzktis`} />
</Box>
<Box
className={`w-box c7zyj9q c1rw6c5s cucw341 c1xmeuo0 cif43cd cdkhpeb c1kyii3u`}>
<Text
id={"dv-lightbox-caption"}
className={`w-text`}>
{"The text you can edit"}
</Text>
</Box>
</Box>
<Box
className={`w-box c1rw6c5s cucw341 c1xmeuo0 cz2lpon`}>
<Button
type={"button"}
dv-lightbox-next-button={""}
className={`w-button c1rw6c5s c5wifrb c13ezfy3 c2tkczq c1ouctu1 c1diqp5q cdkhpeb cwyl4m c1itpbng`}>
<HtmlEmbed
code={"<svg width=\"24\" height=\"24\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z\" fill=\"currentColor\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"></path></svg>"}
clientOnly={true}
className={`w-html-embed`} />
</Button>
</Box>
</Box>
</Box>
</Box>
<HtmlEmbed
code={"<script type=\"module\" src=\"https://drevo.b-cdn.net/Library/Custom%20Components/Lightbox%20Gallery/lightbox-gallery-v1.2.1.js\"></script>"}
clientOnly={true}
className={`w-html-embed`} />
</Box>
<p
className={`w-element`}>
{""}
<br />
{""}
{"ADDITIONAL KEY CREDITS — UNIT EXPERIENCE"}
{""}
<br />
{""}
{""}
<br />
{""}
{"Selected work demonstrating Brent’s depth across Main Unit, Rigging, 2nd Unit, VFX Unit, and Additional Photography."}
{""}
<br />
{""}
{""}
<br />
{""}
{""}
<br />
{""}
<b
className={`w-element`}>
{"MAIN UNIT"}
</b>
{""}
<br />
{""}
{""}
<br />
{""}
{"The Mummy (2017) — Lighting Technician (Namibia)"}
{""}
<br />
{""}
{"Mowgli (2018) — South African Unit Electrician"}
{""}
<br />
{""}
{"Focus: large-scale set electrics, continuity-driven lighting, and integration with complex studio workflows."}
{""}
<br />
{""}
{""}
<br />
{""}
<b
className={`w-element`}>
{"RIGGING UNIT"}
</b>
{""}
<br />
{""}
{""}
<br />
{""}
{"Star Trek: Beyond (2016) — Rigging Spark"}
{""}
<br />
{""}
{"Our Girl (BBC, 2017–2018) — Rigging Gaffer (shot in Nepal)"}
{""}
<br />
{""}
{"Black Sails (2014–2016) — Rigging & Lighting Technician"}
{""}
<br />
{""}
{"Stargate: Origins (2018) — 2nd Rigging Best Boy"}
{""}
<br />
{""}
{"Focus: heavy rigging, safe large-set installations, efficient pre-light systems, and multi-department coordination across stunt, action, and VFX-heavy environments."}
{""}
<br />
{""}
{""}
<br />
{""}
<b
className={`w-element`}>
{"2ND UNIT"}
</b>
{""}
<br />
{""}
{""}
<br />
{""}
{"Origins: The Story of Mankind (2012) — 2nd Unit Gaffer"}
{""}
<br />
{""}
{"Resident Evil: The Final Chapter (2016) — 2nd Unit Best Boy"}
{""}
<br />
{""}
{"Focus: action sequences, continuity with main-unit lighting, and rapid on-the-day problem solving."}
{""}
<br />
{""}
{""}
<br />
{""}
{""}
<br />
{""}
<b
className={`w-element`}>
{"VFX UNIT"}
</b>
{""}
<br />
{""}
{""}
<br />
{""}
{"The Empty Man (2020) — VFX Unit Gaffer"}
{""}
<br />
{""}
{"Focus: interactive lighting, plate lighting, controlled color environments, and integration with digital extensions."}
{""}
<br />
{""}
{""}
<br />
{""}
<b
className={`w-element`}>
{"ADDITIONAL PHOTOGRAPHY"}
</b>
{""}
<br />
{""}
{""}
<br />
{""}
{"Fatal Seduction — Season 2 (2024) — Gaffer"}
{""}
<br />
{""}
{"Focus: maintaining continuity for reshoots and supplementary photography; matching established visual language."}
{""}
<br />
{""}
{""}
<br />
{""}
{""}
<br />
{""}
{""}
<br />
{""}
<b
className={`w-element`}>
{"EARLY FOUNDATION"}
</b>
{""}
<br />
{""}
{""}
<br />
{""}
{"Dredd 3D (2012) — Trainee"}
{""}
<br />
{""}
{"Death Race 2 (2010) — Trainee"}
{""}
<br />
{""}
{"Safe House (2012) — Trainee (Action Unit)"}
{""}
<br />
{""}
{"Focus: grounding in discipline, technical fundamentals, and exposure to international lighting standards."}
</p>
</Box>
</div>
</div>
<div
className={`w-element cns1p6l c1jtnrfa c154qq54 crhgf6d c43jh65 cz2lpon c7sys86 c1loq5zi`}>
<Slot>
<Fragment_1>
<Box
website-theme-buttons={""}
className={`w-box cerqxn6 cylk4iu c1aqi6xk c1nrn79d c4myuoz c1xj1ae8 c1vxk5tx c1619o6x c1izab5s cggmto8 c17pywfy cugnx7e c1rw6c5s c10lhp00 c1xmeuo0 c13nzd84 c9t5p0i c138uecn c7zyj9q cwjkv5a`}>
<Button
website-theme={"light"}
type={"button"}
className={`w-button c8tew8b c7lrsty cjmyn1r c1y1izo3 cuukyfn czeg2mj cxpdco5 cb57f18 cp4zlc8 cucw341 c1xmeuo0 c1uh55lj c7zyj9q cst2mrs c1uz3udn`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-sun-icon lucide-sun\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2\"/><path d=\"M12 20v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"m17.66 17.66 1.41 1.41\"/><path d=\"M2 12h2\"/><path d=\"M20 12h2\"/><path d=\"m6.34 17.66-1.41 1.41\"/><path d=\"m19.07 4.93-1.41 1.41\"/></svg>"}
className={`w-html-embed czeg2mj c1poe215 c10gqmoj cucw341 c1xmeuo0 cgstfnp`} />
</Button>
<Button
website-theme={"dark"}
type={"button"}
className={`w-button c8tew8b c7lrsty cjmyn1r c1y1izo3 cuukyfn czeg2mj cxpdco5 cb57f18 cp4zlc8 cucw341 c1xmeuo0 c1uh55lj c7zyj9q cst2mrs c1uz3udn`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-moon-icon lucide-moon\"><path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\"/></svg>"}
className={`w-html-embed czeg2mj c1poe215 c10gqmoj cucw341 c1xmeuo0 cgstfnp`} />
</Button>
<Button
website-theme={"auto"}
type={"button"}
className={`w-button c8tew8b c7lrsty cjmyn1r c1y1izo3 cuukyfn czeg2mj cxpdco5 cb57f18 cp4zlc8 cucw341 c1xmeuo0 c1uh55lj c7zyj9q cst2mrs c1uz3udn`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-laptop-icon lucide-laptop\"><path d=\"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z\"/><path d=\"M20.054 15.987H3.946\"/></svg>"}
className={`w-html-embed czeg2mj c1poe215 c10gqmoj cucw341 c1xmeuo0 cgstfnp`} />
</Button>
</Box>
</Fragment_1>
</Slot>
</div>
<div
className={`w-element`} />
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<script>\n  (function () {\n  const root = document.documentElement;\n  const themesCycle = ['light', 'dark', 'auto'];\n\n  // Apply theme globally and dispatch event for sync\n  function applyTheme(theme) {\n    localStorage.setItem('website-theme', theme);\n    root.setAttribute('website-theme', theme);\n    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n    root.classList.toggle('dark-theme', theme === 'dark' || (theme === 'auto' && prefersDark));\n    document.dispatchEvent(new CustomEvent('themeChanged', { detail: theme }));\n  }\n\n  // Full switcher logic\n  function applyFullTheme(theme, buttons) {\n    localStorage.setItem('website-theme', theme);\n    root.setAttribute('website-theme', theme);\n    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n    root.classList.toggle('dark-theme', theme === 'dark' || (theme === 'auto' && prefersDark));\n    buttons.forEach(btn => {\n      btn.classList.toggle('active', btn.getAttribute('website-theme') === theme);\n    });\n  }\n\n  // Initialize theme switchers inside a container\n  function initSwitchers(container) {\n    const buttons = container.querySelectorAll('button[website-theme]');\n    if (!buttons.length) return;\n\n    const isShort = container.hasAttribute('website-theme-buttons');\n    let currentTheme = localStorage.getItem('website-theme') || 'auto';\n\n    if (isShort) {\n      // Short switcher: only active button visible\n      function renderShortButton(theme) {\n        buttons.forEach(btn => {\n          btn.style.display = btn.getAttribute('website-theme') === theme ? '' : 'none';\n          btn.classList.remove('active');\n        });\n      }\n      renderShortButton(currentTheme);\n\n      buttons.forEach(btn => {\n        btn.addEventListener('click', () => {\n          const currentIndex = themesCycle.indexOf(currentTheme);\n          const nextIndex = (currentIndex + 1) % themesCycle.length;\n          currentTheme = themesCycle[nextIndex];\n          applyTheme(currentTheme);\n          renderShortButton(currentTheme);\n        });\n      });\n\n      document.addEventListener('themeChanged', e => {\n        currentTheme = e.detail;\n        renderShortButton(currentTheme);\n      });\n\n      applyTheme(currentTheme);\n\n    } else {\n      // Full switcher: all buttons visible, active highlighted\n      buttons.forEach(button => {\n        button.addEventListener('click', () => {\n          const selectedTheme = button.getAttribute('website-theme');\n          applyTheme(selectedTheme);\n          applyFullTheme(selectedTheme, buttons);\n        });\n      });\n\n      document.addEventListener('themeChanged', e => {\n        applyFullTheme(e.detail, buttons);\n      });\n\n      applyFullTheme(currentTheme, buttons);\n    }\n  }\n\n  // Initial scan\n  document.querySelectorAll('div,section,nav,header,footer').forEach(initSwitchers);\n\n  // MutationObserver to handle dynamically added switchers (e.g. Radix Tabs)\n  const observer = new MutationObserver(mutations => {\n    mutations.forEach(mutation => {\n      mutation.addedNodes.forEach(node => {\n        if (!(node instanceof HTMLElement)) return;\n        if (node.matches('div,section,nav,header,footer')) {\n          initSwitchers(node);\n        }\n        node.querySelectorAll?.('div,section,nav,header,footer').forEach(initSwitchers);\n      });\n    });\n  });\n  observer.observe(document.body, { childList: true, subtree: true });\n\n  // Sync theme between tabs/windows\n  window.addEventListener('storage', e => {\n    if (e.key === 'website-theme') {\n      document.dispatchEvent(new CustomEvent('themeChanged', { detail: e.newValue }));\n    }\n  });\n})();\n</script>"}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
</Box>
</Box>
</body>
}


      export { Page }
    