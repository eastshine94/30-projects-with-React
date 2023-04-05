interface Props {
  src: string;
}

export default function ImageBox({ src }: Props) {
  return (
    <div className="image-box">
      <img src={src} alt={"이미지"} />
    </div>
  );
}
