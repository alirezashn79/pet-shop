export default function Iframe({ src }: { src: string }) {
  return (
    <div className="mt-16">
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}",
        }}
      />
      <div className="h_iframe-aparat_embed_frame w-full lg:w-4/6 mx-auto">
        <span style={{ display: "block", paddingTop: "57%" }} />
        <iframe
          src={`https://www.aparat.com/video/video/embed/videohash/${src?.split("/").pop()}/vt/frame`}
          allowFullScreen={true}
        />
      </div>
    </div>
  );
}
