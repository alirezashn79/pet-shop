export default function ifream({ src }: { src: string }) {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}",
        }}
      />
      <div className="h_iframe-aparat_embed_frame w-full lg:w-5/6 mx-auto rounded-md mt-10 overflow-hidden">
        <span style={{ display: "block", paddingTop: "57%" }} />
        <iframe
          src={src || ""}
          allowFullScreen={true}
          mozallowfullscreen={true}
        />
      </div>
    </div>
  );
}
