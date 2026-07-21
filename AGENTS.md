# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Durable Brand And Content Decisions

- Use the brand name exactly as `港医桥/HK CareBridge`; do not introduce another placeholder identity.
- Position the site around `香港药物资讯、癌症治疗与第二诊疗意见`; avoid travel-led language and direct medicine-sales claims.
- Use `微信询药` in drug contexts and link it to `/contact/#drug-inquiry`. Use `微信咨询` for second-opinion and general medical-information contexts and link it to `/contact/#general-consultation`. Refer to the channel only as `微信`.
- Drug inquiries may include a medicine name, current prescription or treatment plan, current medicines and questions. Prescription assessment is completed by a Hong Kong registered doctor; medicine supply is completed by a licensed pharmacy or medical institution.
- Keep public copy positive and action-oriented. Put the single neutral medical note in the footer: `内容用于科普与沟通准备，具体诊疗请咨询医生。`
- Use `药物资讯` throughout the public interface; do not use the former label `药物资料`.
- Keep the homepage title exactly as `香港药物资讯、癌症治疗与第二诊疗意见`.
- Keep homepage modules in this exact order: `药物资讯 / 第二诊疗意见 / 癌症知识 / 微信咨询`.
- The homepage must show exactly the explicit featured drug slugs `tamoxifen / anastrozole / capivasertib` and cancer slugs `lung-cancer / breast-cancer / colorectal-cancer`; never derive these selections from array slicing.
- Keep primary navigation in this exact order: `首页 / 药物资讯 / 第二诊疗意见 / 癌症知识 / 搜索`, followed by `微信咨询`. Search must filter the site's drug, cancer, second-opinion and consultation pages rather than acting as a decorative icon.
- Keep the four consultation steps, WeChat placeholder, preparation prompts, output list and sensitive-information reminder together on `/contact/`. Do not recreate a separate `/process/` route.
- Write all public interface copy as short, concrete descriptions of the site's functions. Avoid slogans, decorative English, proof phrases, repeated headings and promotional claims.
- Do not use headings or descriptions framed as communication priorities, reading benefits or service outcomes. State the medical topic, required information, document item or process step directly; avoid phrases such as `理清`, `帮助读懂`, `沟通重点`, `便于`, `需求澄清`, `获得整理结果` and `个性化资料清单`.
- Drug and cancer entries show one short subtitle below the title in cards and article headers. Write drug subtitles as the medicine class plus its main use, and cancer subtitles as the affected site or main type plus the key basis for diagnosis and treatment. Keep each subtitle to one factual sentence without reading benefits or promotional framing.
- Keep reading time, update dates, article sources and image-source metadata in the content model when needed, but do not render them on public pages.
- Drug articles use locally hosted official manufacturer or regulator images. Cancer articles use a shallow anatomy banner and a consultation image beside the `重要生物标志物` section; stack the split on narrow screens.
- Present official drug packaging on a flat 3:2 near-white stage in list cards and article covers. Retain the clean source image's own white, warm-white or very light grey background wherever possible; extend its edge tone instead of forcing every image to pure white. Keep the outer frame ratio and visual product scale consistent. Preserve the original source files and packaging pixels; reject a source with visible colour banding or compression rather than hiding defects with recolouring, blur or generative edits.
- Name source-preserving normalized drug assets `<slug>-package-3x2-native.webp`. On the 1500 × 1000 canvas, size tall box-and-vial combinations to about 64–70% of canvas height and horizontal boxes to about 60–70% of canvas width, with at least 12% clear space and no stretching. Keep outputs opaque and free of inner-square seams.
- Keep drug and cancer list cards in two columns at medium widths, switching to one column only on narrow screens. Use a wider editorial article body with section headings beside content on desktop; the cancer consultation image should occupy about half of the split section and become full width on mobile.
- The existing `肺癌`, `乳腺癌` and `结直肠癌` articles are copy-locked. Do not change their summaries, introductions, sections, lists or questions unless the user explicitly requests copy edits. Additional cancer articles use the same section structure without altering those three originals.
- Do not add prices, inventory, purchase promises, shopping carts, payment, orders, or unconfirmed doctor, pharmacy, institution or commercial-relationship names. Do not imply diagnosis, treatment advice, report interpretation, appointment booking, referral, guaranteed medicine availability or a guaranteed response time.
- Use the supplied black `HK CareBridge` bridge-and-cross mark in the site header and footer without redrawing or forcing a new letterform.
