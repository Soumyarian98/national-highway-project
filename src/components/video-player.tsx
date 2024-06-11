import { useRef } from "react";

interface Props {
  src: string;
  segments?: {
    label: string;
    startTime: number;
    endTime: number;
  }[];
}

export const VideoPlayer = ({ src, segments }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <div className="space-y-4">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto rounded-lg"
        muted
        controls
      />
      {segments && (
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {segments.map(segment => (
              <tr
                className="cursor-pointer text-sm"
                onClick={() => {
                  const video = videoRef.current;
                  if (!video) return;
                  video.currentTime = segment.startTime;
                }}
                key={segment.label}>
                <td className="pr-2 text-center pb-1 text-primary">
                  {segment.startTime}-{segment.endTime}
                </td>
                <td className="pb-1">{segment.label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VideoPlayer;
