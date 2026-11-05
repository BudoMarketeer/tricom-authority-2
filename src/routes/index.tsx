import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "TRICOM Training — Real-World Combatives for Law Enforcement, Military & Everyday Protectors",
      },
      {
        name: "description",
        content:
          "TRICOM (Triangle Combatives) is the training brand of Survival Edge Tactical Systems, founded by Jared Wihongi. Street-tested, military-proven combatives taught in 40+ countries.",
      },
      { property: "og:title", content: "TRICOM Training — Real-World Combatives" },
      {
        property: "og:description",
        content:
          "Street-tested, military-proven combatives trusted by law enforcement, military and everyday protectors. Taught in 40+ countries.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1793886878432684230/attachments/4383ac36-20ec-45c6-8a30-b7242a7e284e.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://vibe.filesafe.space/1793886878432684230/attachments/4383ac36-20ec-45c6-8a30-b7242a7e284e.jpg",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/tricom-authority.html"
      title="TRICOM Training Authority Homepage"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "0",
        display: "block",
      }}
    />
  );
}
