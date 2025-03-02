export function Video() {
    return (
      <video
        className="object-cover absolute top-0 left-0 -z-10 w-full h-full"
        width="100%"
        height="100%"
        preload="none"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="../globee-bg-vd.mp4" type="video/mp4" />
        <track />
        Your browser does not support the video tag.
      </video>
    );
  }