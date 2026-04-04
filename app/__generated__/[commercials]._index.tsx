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
<b
className={`w-element`}>
{"Brent brings speed, precision, and adaptable problem-solving to agency-driven commercial work. Trusted by leading global brands across automotive, fashion, luxury, technology, lifestyle, and beverage, he delivers lighting that supports fast creative decisions, tight schedules, and the visual identity of each campaign."}
</b>
</p>
<HtmlEmbed
code={"<style>\n.client-wall { max-width: 1100px; margin: auto; padding: 60px 20px; }\n.client-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 52px 64px; align-items: center; justify-items: center; }\n.logo-item { width: 100%; min-height: 64px; display: flex; align-items: center; justify-content: center; }\n.logo-item img { max-width: 150px; max-height: 64px; width: auto; height: auto; object-fit: contain; opacity: 0.68; filter: grayscale(1); transition: opacity .25s ease, transform .25s ease, filter .25s ease; }\n.logo-item img:hover { opacity: 1; transform: translateY(-2px); filter: grayscale(0); }\n.logo-item .text-logo { font-family: Arial, Helvetica, sans-serif; font-size: 19px; letter-spacing: 0.14em; color: #000; opacity: 0.68; transition: opacity .25s ease, transform .25s ease, color .25s ease; white-space: nowrap; }\n.logo-item .text-logo:hover { opacity: 1; transform: translateY(-2px); }\n\nhtml[website-theme=\"dark\"] .logo-item img { filter: grayscale(1) invert(1); }\nhtml[website-theme=\"dark\"] .logo-item img:hover { filter: grayscale(0) invert(0); }\nhtml[website-theme=\"dark\"] .logo-item .text-logo { color: #fff; }\n\nhtml[website-theme=\"light\"] .logo-item img { filter: grayscale(1); }\nhtml[website-theme=\"light\"] .logo-item img:hover { filter: grayscale(0); }\nhtml[website-theme=\"light\"] .logo-item .text-logo { color: #000; }\n\n@media (prefers-color-scheme: dark) {\n  html[website-theme=\"auto\"] .logo-item img { filter: grayscale(1) invert(1); }\n  html[website-theme=\"auto\"] .logo-item img:hover { filter: grayscale(0) invert(0); }\n  html[website-theme=\"auto\"] .logo-item .text-logo { color: #fff; }\n}\n\n@media (prefers-color-scheme: light) {\n  html[website-theme=\"auto\"] .logo-item img { filter: grayscale(1); }\n  html[website-theme=\"auto\"] .logo-item img:hover { filter: grayscale(0); }\n  html[website-theme=\"auto\"] .logo-item .text-logo { color: #000; }\n}\n</style>\n\n<div class=\"client-wall\">\n  <div class=\"client-grid\">\n\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/astonmartin.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Aston Martin\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/bmw.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"BMW\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/audi.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Audi\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/mini.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Mini\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/nissan-global.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Nissan\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/volkswagen.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Volkswagen\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/landrover.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Range Rover\"></div>\n\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/dior.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Christian Dior\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/louisvuitton.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Louis Vuitton\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/tomford.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Tom Ford\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/balmain.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Balmain\"></div>\n\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/meta.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Meta\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/instagram.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Instagram\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/vodafone.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Vodafone\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/mtn.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"MTN\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/cellc.co.za/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Cell C\"></div>\n\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/ray-ban.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Ray-Ban\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/crocs.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Crocs\"></div>\n    <div class=\"logo-item\"><span class=\"text-logo\">JD WILLIAMS</span></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/primark.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Primark\"></div>\n    <div class=\"logo-item\"><span class=\"text-logo\">MAXHOSA AFRICA</span></div>\n\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/coca-cola.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Coca-Cola\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/theheinekencompany.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Heineken\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/jamesonwhiskey.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Jameson\"></div>\n    <div class=\"logo-item\"><span class=\"text-logo\">BRUTAL FRUIT</span></div>\n    <div class=\"logo-item\"><span class=\"text-logo\">CASTLE LITE</span></div>\n    <div class=\"logo-item\"><span class=\"text-logo\">TANQUERAY</span></div>\n\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/aramco.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Aramco\"></div>\n    <div class=\"logo-item\"><span class=\"text-logo\">WOOLMARK</span></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/adidas.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Adidas\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/nike.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Nike\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/bankofireland.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Bank of Ireland\"></div>\n    <div class=\"logo-item\"><img src=\"https://cdn.brandfetch.io/domain/marshall.com/w/200/h/80/fallback/404/logo?c=1idnQfne-QV3MnCOxc0\" alt=\"Marshall\"></div>\n\n  </div>\n</div>\n\n<script>\n  document.querySelectorAll('.logo-item img').forEach(img => {\n    img.addEventListener('error', function() {\n      this.style.display = 'none';\n    });\n  });\n</script>"}
executeScriptOnCanvas={true}
clientOnly={false}
className={`w-html-embed`} />
</Box>
</Box>
</div>
</div>
<Slot>
<Fragment_1>
<Box
className={`w-box cnj9wpl cmgv3df c11mvtry c4a4m5l c7zyj9q clfdxt1 c1uptsej c8tew8b c7lrsty cjmyn1r c1y1izo3 cuukyfn c7o56e8 cqrgxta c1tgy5km c1rw6c5s c1vz3ewr cl8aymc c1bl0y0f c1j0tqkr c1m6vyja c16ihz7h c1mfxk51 c1qp4wjy cvayz12 cyfbjju c1cnkrrm c1idrzyd cm0ufbg c1hrvr8b c1q776nx c2oby3n cnv9txi c15dvzlw`}>
<Box
className={`w-box c1rw6c5s cucw341 c1mqjxyf c833fyj c1d3de5k`} />
<Box
className={`w-box c1rw6c5s c1vz3ewr c1mqjxyf cq2gdea c1b7vdjs c1xhyh14 c13ineqz cn977ni c1hmeh7i`} />
<div
className={`w-element c1rw6c5s cucw341 c1mqjxyf culock7 c1uar53d`}>
<Text
className={`w-text c4a4m5l c1uh55lj c1xo47xn c1gz9wmd`}>
{"Website Theme:"}
</Text>
<Slot>
<Fragment_1>
<Box
website-theme-buttons={""}
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
{"Auto(System)"}
</Button>
</Box>
</Fragment_1>
</Slot>
</div>
</Box>
</Fragment_1>
</Slot>
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
    