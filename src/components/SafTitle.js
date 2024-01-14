import React from "react";
import { Fade } from "react-awesome-reveal";

export default function SafTitle({
  className,
  maxWidth = 370,
  color = "dark",
}) {
  const headingWidth = maxWidth * 0.72 + 24;
  const headingMarginBottom = maxWidth * 0.04;
  const subheadingWidth = maxWidth * 1 + 24;
  const subheadingMarginBottom = maxWidth * 0.1;
  const bottomWidth = maxWidth * 0.58;
  return (
    <div className={`${color === "dark" ? "fill-neutral-700" : "fill-white"}`}>
      <Fade cascade direction="up" damping={0.3} triggerOnce={true}>
        <div
          className="max-w-full pr-6"
          style={{ width: headingWidth, marginBottom: headingMarginBottom }}
        >
          <svg viewBox="0 0 282.15 33.98" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="m23.89 8.87-5.61 1.72c-.21-1.15-.78-2.19-1.72-3.12s-2.31-1.4-4.12-1.4c-1.48 0-2.69.4-3.62 1.2-.94.8-1.4 1.76-1.4 2.87 0 1.96 1.16 3.17 3.48 3.62l4.48.86c2.83.54 5.04 1.67 6.61 3.39s2.35 3.74 2.35 6.06c0 2.65-1.05 4.97-3.14 6.94-2.1 1.98-4.91 2.96-8.44 2.96-2.02 0-3.85-.3-5.47-.9s-2.94-1.41-3.94-2.42-1.77-2.08-2.33-3.21-.9-2.3-1.02-3.51l5.79-1.54c.15 1.72.82 3.15 2.01 4.3s2.86 1.72 5 1.72c1.63 0 2.9-.36 3.82-1.09.92-.72 1.38-1.67 1.38-2.85 0-.94-.34-1.74-1.02-2.42s-1.64-1.14-2.87-1.38l-4.48-.91c-2.59-.54-4.65-1.61-6.15-3.21-1.51-1.6-2.26-3.59-2.26-5.97 0-2.83 1.09-5.22 3.28-7.15 2.19-1.92 4.82-2.89 7.9-2.89 1.84 0 3.48.26 4.93.77s2.61 1.2 3.48 2.06 1.55 1.74 2.04 2.65c.48.9.83 1.85 1.04 2.85z" />
              <path d="m27.74 27.24c0-1.9.62-3.42 1.85-4.57 1.24-1.15 2.83-1.87 4.8-2.17l5.47-.81c1.12-.15 1.67-.68 1.67-1.58 0-.84-.32-1.54-.97-2.08s-1.58-.81-2.78-.81c-1.27 0-2.27.35-3.01 1.04s-1.15 1.55-1.24 2.58l-5.34-1.13c.21-1.93 1.16-3.63 2.85-5.11s3.92-2.22 6.7-2.22c3.32 0 5.76.79 7.33 2.38 1.57 1.58 2.35 3.61 2.35 6.09v10.95c0 1.33.09 2.5.27 3.53h-5.52c-.15-.66-.23-1.55-.23-2.67-1.42 2.2-3.6 3.3-6.56 3.3-2.29 0-4.14-.66-5.54-1.99s-2.1-2.9-2.1-4.71zm8.91 2.22c1.42 0 2.59-.4 3.51-1.2s1.38-2.12 1.38-3.96v-1l-5.02.77c-1.84.27-2.76 1.21-2.76 2.81 0 .72.26 1.33.77 1.83s1.22.75 2.13.75z" />
              <path d="m63.8 5.52c-.85 0-1.58.23-2.19.7-.62.47-.93 1.26-.93 2.38v2.44h5.02v5.16h-5.02v17.1h-6.06v-17.1h-3.71v-5.16h3.71v-2.53c0-2.5.73-4.51 2.19-6.02s3.43-2.26 5.9-2.26c1.33 0 2.32.15 2.99.45v5.07c-.51-.15-1.15-.23-1.9-.23z" />
              <path d="m84.02 25.43 5.02 1.49c-.6 2.05-1.79 3.74-3.55 5.07s-3.96 1.99-6.58 1.99c-3.2 0-5.91-1.08-8.14-3.24s-3.35-5.04-3.35-8.66 1.09-6.25 3.26-8.44 4.74-3.28 7.69-3.28c3.44 0 6.13 1.03 8.08 3.08s2.92 4.87 2.92 8.46c0 .24 0 .51-.02.81s-.02.54-.02.72l-.05.32h-15.93c.06 1.45.63 2.65 1.72 3.62s2.38 1.45 3.89 1.45c2.56 0 4.25-1.13 5.07-3.39zm-10.54-5.79h9.95c-.06-1.24-.51-2.28-1.33-3.12-.83-.84-2.04-1.27-3.64-1.27-1.45 0-2.62.45-3.53 1.36s-1.39 1.92-1.45 3.03z" />
              <path d="m103.93 27.24c0-1.9.62-3.42 1.85-4.57 1.24-1.15 2.83-1.87 4.8-2.17l5.47-.81c1.12-.15 1.67-.68 1.67-1.58 0-.84-.32-1.54-.97-2.08s-1.58-.81-2.78-.81c-1.27 0-2.27.35-3.01 1.04s-1.15 1.55-1.24 2.58l-5.34-1.13c.21-1.93 1.16-3.63 2.85-5.11s3.92-2.22 6.7-2.22c3.32 0 5.76.79 7.33 2.38 1.57 1.58 2.35 3.61 2.35 6.09v10.95c0 1.33.09 2.5.27 3.53h-5.52c-.15-.66-.23-1.55-.23-2.67-1.42 2.2-3.6 3.3-6.56 3.3-2.29 0-4.14-.66-5.54-1.99s-2.1-2.9-2.1-4.71zm8.91 2.22c1.42 0 2.59-.4 3.51-1.2s1.38-2.12 1.38-3.96v-1l-5.02.77c-1.84.27-2.76 1.21-2.76 2.81 0 .72.26 1.33.77 1.83s1.22.75 2.13.75z" />
              <path d="m135.69 20.5v12.8h-6.02v-22.26h5.84v2.76c.63-1.09 1.54-1.92 2.71-2.49 1.18-.57 2.41-.86 3.71-.86 2.62 0 4.62.82 6 2.47 1.37 1.64 2.06 3.76 2.06 6.36v14.03h-6.02v-12.99c0-1.33-.34-2.4-1.02-3.21s-1.71-1.22-3.1-1.22c-1.27 0-2.28.44-3.03 1.31-.75.88-1.13 1.98-1.13 3.3z" />
              <path d="m177.32.54v28.73c0 1.48.06 2.82.18 4.03h-5.75c-.15-.75-.23-1.61-.23-2.58-.51.94-1.32 1.69-2.42 2.26s-2.38.86-3.82.86c-3.17 0-5.77-1.11-7.81-3.33s-3.05-5.01-3.05-8.39 1-6.05 3.01-8.28 4.56-3.35 7.67-3.35 5.29.92 6.29 2.76v-12.71zm-16.83 21.58c0 1.96.51 3.51 1.54 4.64s2.35 1.7 3.98 1.7 2.91-.57 3.94-1.72 1.54-2.7 1.54-4.66-.51-3.45-1.54-4.55-2.34-1.65-3.94-1.65-2.92.56-3.96 1.67c-1.04 1.12-1.56 2.64-1.56 4.57z" />
              <path d="m201.75 33.3h-6.29v-32.08h20.27v5.93h-14.03v7.92h12.49v5.75h-12.44v12.49z" />
              <path d="m217.5 27.24c0-1.9.62-3.42 1.85-4.57 1.24-1.15 2.83-1.87 4.8-2.17l5.47-.81c1.12-.15 1.67-.68 1.67-1.58 0-.84-.32-1.54-.97-2.08s-1.58-.81-2.78-.81c-1.27 0-2.27.35-3.01 1.04s-1.15 1.55-1.24 2.58l-5.34-1.13c.21-1.93 1.16-3.63 2.85-5.11s3.92-2.22 6.7-2.22c3.32 0 5.76.79 7.33 2.38 1.57 1.58 2.35 3.61 2.35 6.09v10.95c0 1.33.09 2.5.27 3.53h-5.52c-.15-.66-.23-1.55-.23-2.67-1.42 2.2-3.6 3.3-6.56 3.3-2.29 0-4.14-.66-5.54-1.99s-2.1-2.9-2.1-4.71zm8.91 2.22c1.42 0 2.59-.4 3.51-1.2s1.38-2.12 1.38-3.96v-1l-5.02.77c-1.84.27-2.76 1.21-2.76 2.81 0 .72.26 1.33.77 1.83s1.22.75 2.13.75z" />
              <path d="m242.52 3.76c0-1.02.36-1.91 1.09-2.65.72-.74 1.6-1.11 2.62-1.11s1.9.36 2.62 1.09 1.09 1.61 1.09 2.67c0 1-.36 1.86-1.09 2.58-.72.72-1.6 1.09-2.62 1.09s-1.9-.36-2.62-1.09-1.09-1.58-1.09-2.58zm6.74 29.55h-6.02v-22.27h6.02v22.26z" />
              <path d="m269.26 10.95v6.06c-.6-.12-1.21-.18-1.81-.18-1.72 0-3.11.49-4.16 1.47-1.06.98-1.58 2.59-1.58 4.82v10.18h-6.02v-22.26h5.84v3.3c1.09-2.32 3.2-3.48 6.33-3.48.33 0 .8.03 1.4.09z" />
              <path d="m275.14 17.65c-.78-.78-1.18-1.73-1.18-2.85s.39-2.07 1.18-2.87c.78-.8 1.73-1.2 2.85-1.2s2.12.4 2.92 1.2 1.2 1.76 1.2 2.87-.4 2.07-1.2 2.85-1.77 1.18-2.92 1.18-2.07-.39-2.85-1.18zm.05 14.8c-.78-.78-1.18-1.73-1.18-2.85s.39-2.07 1.18-2.87c.78-.8 1.73-1.2 2.85-1.2s2.12.4 2.92 1.2 1.2 1.76 1.2 2.87-.4 2.07-1.2 2.85c-.8.79-1.77 1.18-2.92 1.18s-2.07-.39-2.85-1.18z" />
            </g>
          </svg>
        </div>

        <div
          className="max-w-full pr-6"
          style={{
            width: subheadingWidth,
            marginBottom: subheadingMarginBottom,
          }}
        >
          <svg viewBox="0 0 391.06 45.65" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="m8.49 15.66-3.18-5.98h-1.88v5.98h-2.58v-15.13h5.8c1.42 0 2.57.44 3.44 1.31s1.3 1.97 1.3 3.28c0 1.08-.31 2.01-.92 2.77-.61.77-1.44 1.28-2.5 1.54l3.41 6.23h-2.9zm-5.05-8.23h2.75c.78 0 1.41-.21 1.89-.63s.71-.98.71-1.67-.24-1.28-.71-1.7c-.48-.42-1.11-.63-1.89-.63h-2.75z" />
              <path d="m20.55 12.04 2.09.66c-.3.95-.86 1.74-1.68 2.36s-1.82.93-3.02.93c-1.48 0-2.73-.5-3.77-1.52-1.03-1.01-1.55-2.36-1.55-4.05 0-1.59.5-2.9 1.5-3.93 1-1.02 2.19-1.54 3.55-1.54 1.59 0 2.84.49 3.73 1.46.9.97 1.34 2.29 1.34 3.94 0 .44-.02.7-.06.79h-7.6c.03.78.32 1.43.86 1.94.55.51 1.21.77 1.97.77 1.34 0 2.21-.6 2.6-1.81zm-5.38-2.71h5.1c-.03-.65-.26-1.2-.69-1.64s-1.06-.66-1.87-.66c-.74 0-1.34.23-1.79.69s-.7 1-.75 1.61z" />
              <path d="m24.39 12.85c0-.88.29-1.59.86-2.12.58-.53 1.33-.87 2.27-1.01l2.67-.41c.51-.07.77-.32.77-.75 0-.47-.16-.85-.49-1.14s-.82-.44-1.47-.44-1.12.17-1.49.52-.58.8-.64 1.35l-2.26-.51c.1-.94.55-1.74 1.34-2.4.8-.66 1.81-.99 3.03-.99 1.51 0 2.62.36 3.34 1.09s1.08 1.66 1.08 2.8v5.16c0 .68.04 1.24.13 1.66h-2.3c-.07-.21-.11-.65-.11-1.32-.68 1.1-1.75 1.64-3.2 1.64-1.05 0-1.9-.31-2.55-.93s-.97-1.35-.97-2.21zm3.99 1.2c.77 0 1.39-.21 1.87-.63s.71-1.11.71-2.06v-.47l-2.71.41c-.92.16-1.39.63-1.39 1.41 0 .37.14.69.41.95s.64.4 1.11.4z" />
              <path d="m38.75 15.66h-2.48v-15.45h2.48z" />
              <path d="m41.93 2.75c-.31-.31-.47-.69-.47-1.13s.16-.82.47-1.14.69-.48 1.13-.48.84.16 1.15.47.47.7.47 1.15-.16.82-.47 1.13-.7.47-1.15.47-.82-.16-1.13-.47zm2.37 12.91h-2.45v-10.39h2.45z" />
              <path d="m55.1 15.66h-8.49v-2.16l5.27-6.06h-5.16v-2.18h8.28v2.09l-5.33 6.12h5.44v2.18z" />
              <path d="m57.49 2.75c-.31-.31-.47-.69-.47-1.13s.16-.82.47-1.14.69-.48 1.13-.48.84.16 1.15.47.47.7.47 1.15-.16.82-.47 1.13-.7.47-1.15.47-.82-.16-1.13-.47zm2.37 12.91h-2.45v-10.39h2.45z" />
              <path d="m65.43 9.67v6h-2.48v-10.4h2.41v1.39c.33-.57.76-.99 1.31-1.27s1.13-.42 1.76-.42c1.22 0 2.16.38 2.8 1.15s.96 1.76.96 2.97v6.57h-2.48v-6.15c0-.7-.17-1.25-.51-1.67s-.88-.63-1.62-.63c-.68 0-1.21.23-1.59.69s-.57 1.05-.57 1.76z" />
              <path d="m74.35 16.24 2.28-.6c.09.65.37 1.19.84 1.61.48.42 1.06.63 1.76.63 1.96 0 2.94-1.04 2.94-3.12v-1.09c-.24.44-.63.8-1.15 1.09-.53.29-1.15.43-1.86.43-1.39 0-2.54-.48-3.45-1.43-.9-.95-1.35-2.16-1.35-3.63s.45-2.6 1.34-3.58c.9-.98 2.05-1.47 3.46-1.47 1.52 0 2.55.51 3.07 1.52v-1.32h2.39v9.41c0 1.54-.43 2.81-1.3 3.83s-2.21 1.53-4.03 1.53c-1.34 0-2.46-.36-3.37-1.09s-1.44-1.63-1.58-2.71zm5.23-3.16c.8 0 1.44-.27 1.93-.8s.74-1.25.74-2.14-.25-1.59-.75-2.12-1.14-.8-1.92-.8-1.45.27-1.95.8c-.51.53-.76 1.24-.76 2.12s.25 1.61.75 2.14 1.15.8 1.96.8z" />
              <path d="m98.63 5.27h2.56l2.45 7.19 2.07-7.19h2.52l-3.33 10.39h-2.48l-2.58-7.47-2.52 7.47h-2.54l-3.37-10.39h2.65l2.11 7.19 2.45-7.19z" />
              <path d="m114.31 4.95c1.56 0 2.86.52 3.87 1.56 1.02 1.04 1.53 2.35 1.53 3.95s-.51 2.91-1.53 3.96-2.31 1.57-3.87 1.57-2.83-.52-3.85-1.57-1.53-2.36-1.53-3.96.51-2.91 1.53-3.95 2.3-1.56 3.85-1.56zm-2.06 7.93c.56.59 1.25.89 2.06.89s1.5-.29 2.06-.87.84-1.39.84-2.43-.28-1.82-.84-2.4-1.25-.86-2.06-.86-1.5.29-2.06.86c-.56.58-.84 1.38-.84 2.4s.28 1.83.84 2.42z" />
              <path d="m124.45 15.66h-2.45v-10.39h2.37v1.32c.28-.51.71-.91 1.29-1.19s1.17-.43 1.78-.43c.7 0 1.32.16 1.88.47.55.31.97.77 1.24 1.37.73-1.22 1.85-1.83 3.37-1.83 1.02 0 1.89.33 2.6 1s1.07 1.65 1.07 2.94v6.74h-2.39v-6.34c0-.64-.17-1.16-.5-1.55s-.84-.59-1.5-.59-1.16.22-1.56.66-.6.99-.6 1.64v6.17h-2.43v-6.34c0-.64-.17-1.16-.5-1.55s-.84-.59-1.5-.59-1.18.22-1.57.65-.59.99-.59 1.65v6.17z" />
              <path d="m147.62 12.04 2.09.66c-.3.95-.86 1.74-1.68 2.36s-1.82.93-3.02.93c-1.48 0-2.73-.5-3.77-1.52-1.03-1.01-1.55-2.36-1.55-4.05 0-1.59.5-2.9 1.5-3.93 1-1.02 2.19-1.54 3.55-1.54 1.59 0 2.84.49 3.73 1.46.9.97 1.34 2.29 1.34 3.94 0 .44-.02.7-.06.79h-7.6c.03.78.32 1.43.86 1.94.55.51 1.21.77 1.97.77 1.34 0 2.21-.6 2.6-1.81zm-5.38-2.71h5.1c-.03-.65-.26-1.2-.69-1.64s-1.06-.66-1.87-.66c-.74 0-1.34.23-1.79.69s-.7 1-.75 1.61z" />
              <path d="m154.58 9.67v6h-2.48v-10.4h2.41v1.39c.33-.57.76-.99 1.31-1.27s1.13-.42 1.76-.42c1.22 0 2.16.38 2.8 1.15s.96 1.76.96 2.97v6.57h-2.48v-6.15c0-.7-.17-1.25-.51-1.67s-.88-.63-1.62-.63c-.68 0-1.21.23-1.59.69s-.57 1.05-.57 1.76z" />
              <path d="m171.89 15.66h-2.45v-10.39h2.37v1.32c.28-.51.71-.91 1.29-1.19s1.17-.43 1.78-.43c.7 0 1.32.16 1.88.47.55.31.97.77 1.24 1.37.73-1.22 1.85-1.83 3.37-1.83 1.02 0 1.89.33 2.6 1s1.07 1.65 1.07 2.94v6.74h-2.39v-6.34c0-.64-.17-1.16-.5-1.55s-.84-.59-1.5-.59-1.16.22-1.56.66-.6.99-.6 1.64v6.17h-2.43v-6.34c0-.64-.17-1.16-.5-1.55s-.84-.59-1.5-.59-1.18.22-1.57.65-.59.99-.59 1.65v6.17z" />
              <path d="m188.04 2.75c-.31-.31-.47-.69-.47-1.13s.16-.82.47-1.14.69-.48 1.13-.48.84.16 1.15.47.47.7.47 1.15-.16.82-.47 1.13-.7.47-1.15.47-.82-.16-1.13-.47zm2.37 12.91h-2.45v-10.39h2.45z" />
              <path d="m192.76 16.24 2.28-.6c.09.65.37 1.19.84 1.61.48.42 1.06.63 1.76.63 1.96 0 2.94-1.04 2.94-3.12v-1.09c-.24.44-.63.8-1.15 1.09-.53.29-1.15.43-1.86.43-1.39 0-2.54-.48-3.45-1.43-.9-.95-1.35-2.16-1.35-3.63s.45-2.6 1.34-3.58c.9-.98 2.05-1.47 3.46-1.47 1.52 0 2.55.51 3.07 1.52v-1.32h2.39v9.41c0 1.54-.43 2.81-1.3 3.83s-2.21 1.53-4.03 1.53c-1.34 0-2.46-.36-3.37-1.09s-1.44-1.63-1.58-2.71zm5.23-3.16c.8 0 1.44-.27 1.93-.8s.74-1.25.74-2.14-.25-1.59-.75-2.12-1.14-.8-1.92-.8-1.45.27-1.95.8c-.51.53-.76 1.24-.76 2.12s.25 1.61.75 2.14 1.15.8 1.96.8z" />
              <path d="m212.05 5.21v2.52c-.28-.04-.55-.06-.81-.06-1.86 0-2.8 1.02-2.8 3.05v4.95h-2.48v-10.4h2.41v1.66c.24-.55.63-.99 1.17-1.31s1.15-.48 1.83-.48c.23 0 .45.02.66.06z" />
              <path d="m213.39 12.85c0-.88.29-1.59.86-2.12.58-.53 1.33-.87 2.27-1.01l2.67-.41c.51-.07.77-.32.77-.75 0-.47-.16-.85-.49-1.14s-.82-.44-1.47-.44-1.12.17-1.49.52-.58.8-.64 1.35l-2.26-.51c.1-.94.55-1.74 1.34-2.4.8-.66 1.81-.99 3.03-.99 1.51 0 2.62.36 3.34 1.09s1.08 1.66 1.08 2.8v5.16c0 .68.04 1.24.13 1.66h-2.3c-.07-.21-.11-.65-.11-1.32-.68 1.1-1.75 1.64-3.2 1.64-1.05 0-1.9-.31-2.55-.93s-.97-1.35-.97-2.21zm3.99 1.2c.77 0 1.39-.21 1.87-.63s.71-1.11.71-2.06v-.47l-2.71.41c-.92.16-1.39.63-1.39 1.41 0 .37.14.69.41.95s.64.4 1.11.4z" />
              <path d="m227.75 9.67v6h-2.48v-10.4h2.41v1.39c.33-.57.76-.99 1.31-1.27s1.13-.42 1.76-.42c1.22 0 2.16.38 2.8 1.15s.96 1.76.96 2.97v6.57h-2.48v-6.15c0-.7-.17-1.25-.51-1.67s-.88-.63-1.62-.63c-.68 0-1.21.23-1.59.69s-.57 1.05-.57 1.76z" />
              <path d="m240.56 2.09v3.18h2.16v2.2h-2.16v4.82c0 .46.11.79.32.99.21.21.55.31 1 .31.28 0 .57-.03.85-.09v2.05c-.37.16-.87.23-1.52.23-.97 0-1.73-.27-2.28-.82-.56-.55-.83-1.31-.83-2.27v-5.23h-1.92v-2.2h.53c.53 0 .92-.15 1.19-.45s.41-.69.41-1.17v-1.56h2.24z" />
              <path d="m256.18 5.27h2.56l2.45 7.19 2.07-7.19h2.52l-3.33 10.39h-2.48l-2.58-7.47-2.52 7.47h-2.54l-3.37-10.39h2.65l2.11 7.19 2.45-7.19z" />
              <path d="m271.86 4.95c1.56 0 2.86.52 3.87 1.56 1.02 1.04 1.53 2.35 1.53 3.95s-.51 2.91-1.53 3.96-2.31 1.57-3.87 1.57-2.83-.52-3.85-1.57-1.53-2.36-1.53-3.96.51-2.91 1.53-3.95 2.3-1.56 3.85-1.56zm-2.06 7.93c.56.59 1.25.89 2.06.89s1.5-.29 2.06-.87.84-1.39.84-2.43-.28-1.82-.84-2.4-1.25-.86-2.06-.86-1.5.29-2.06.86c-.56.58-.84 1.38-.84 2.4s.28 1.83.84 2.42z" />
              <path d="m285.62 5.21v2.52c-.28-.04-.55-.06-.81-.06-1.86 0-2.8 1.02-2.8 3.05v4.95h-2.48v-10.4h2.41v1.66c.24-.55.63-.99 1.17-1.31s1.15-.48 1.83-.48c.23 0 .45.02.66.06z" />
              <path d="m297.32 5.27-4.27 4.4 4.35 6h-3.03l-3.05-4.25-1.28 1.34v2.9h-2.45v-15.45h2.45v9.26l3.99-4.2z" />
              <path d="m305.7 12.04 2.09.66c-.3.95-.86 1.74-1.67 2.36-.82.62-1.83.93-3.02.93-1.48 0-2.74-.5-3.77-1.52-1.03-1.01-1.55-2.36-1.55-4.05 0-1.59.5-2.9 1.5-3.93 1-1.02 2.19-1.54 3.55-1.54 1.59 0 2.84.49 3.73 1.46.9.97 1.34 2.29 1.34 3.94 0 .44-.02.7-.06.79h-7.6c.03.78.32 1.43.86 1.94s1.21.77 1.97.77c1.34 0 2.2-.6 2.6-1.81zm-5.38-2.71h5.1c-.03-.65-.26-1.2-.69-1.64s-1.06-.66-1.87-.66c-.74 0-1.34.23-1.79.69-.46.46-.7 1-.75 1.61z" />
              <path d="m316.27 5.21v2.52c-.29-.04-.56-.06-.81-.06-1.86 0-2.79 1.02-2.79 3.05v4.95h-2.48v-10.4h2.41v1.66c.24-.55.63-.99 1.17-1.31s1.15-.48 1.83-.48c.23 0 .45.02.66.06z" />
              <path d="m317.33 12.85 2.16-.6c.04.5.25.92.62 1.26s.87.51 1.49.51c.48 0 .86-.11 1.14-.34s.42-.51.42-.85c0-.6-.41-.98-1.22-1.15l-1.54-.34c-.9-.2-1.59-.57-2.07-1.11s-.73-1.18-.73-1.92c0-.91.37-1.7 1.11-2.36s1.64-.99 2.71-.99c.68 0 1.29.1 1.81.3s.94.46 1.23.78.51.63.67.93.26.6.3.9l-2.09.6c-.06-.4-.24-.76-.54-1.08-.31-.32-.76-.48-1.38-.48-.43 0-.78.12-1.07.35s-.43.52-.43.84c0 .58.35.95 1.05 1.09l1.58.32c.97.21 1.71.6 2.22 1.15s.77 1.22.77 2.01c0 .87-.34 1.64-1.04 2.32-.69.68-1.65 1.01-2.89 1.01-.71 0-1.35-.11-1.91-.32s-1-.49-1.32-.82-.57-.67-.75-1-.28-.66-.31-.99z" />
              <path d="m326.87 1.81c0-.4.15-.74.45-1.02s.68-.43 1.13-.43c.51 0 .93.19 1.27.55.33.37.5.85.5 1.43 0 1.25-.33 2.21-.98 2.86s-1.38 1.02-2.18 1.11v-1.17c.44-.08.83-.32 1.17-.69s.52-.8.53-1.27c-.14.07-.29.11-.45.11-.43 0-.78-.13-1.04-.41-.27-.27-.41-.63-.41-1.07z" />
              <path d="m343.75 5.21v2.52c-.29-.04-.56-.06-.81-.06-1.86 0-2.79 1.02-2.79 3.05v4.95h-2.48v-10.4h2.41v1.66c.24-.55.63-.99 1.17-1.31s1.15-.48 1.83-.48c.23 0 .45.02.66.06z" />
              <path d="m345.8 2.75c-.31-.31-.47-.69-.47-1.13s.16-.82.47-1.14.69-.48 1.13-.48.84.16 1.15.47.47.7.47 1.15-.16.82-.47 1.13-.7.47-1.15.47-.82-.16-1.13-.47zm2.37 12.91h-2.45v-10.39h2.45z" />
              <path d="m350.51 16.24 2.28-.6c.09.65.37 1.19.84 1.61.48.42 1.06.63 1.76.63 1.96 0 2.95-1.04 2.95-3.12v-1.09c-.24.44-.63.8-1.15 1.09-.53.29-1.15.43-1.86.43-1.39 0-2.54-.48-3.45-1.43-.9-.95-1.35-2.16-1.35-3.63s.45-2.6 1.34-3.58c.9-.98 2.05-1.47 3.46-1.47 1.52 0 2.55.51 3.07 1.52v-1.32h2.39v9.41c0 1.54-.43 2.81-1.3 3.83s-2.21 1.53-4.03 1.53c-1.34 0-2.46-.36-3.37-1.09s-1.44-1.63-1.58-2.71zm5.23-3.16c.8 0 1.44-.27 1.93-.8s.74-1.25.74-2.14-.25-1.59-.75-2.12-1.14-.8-1.92-.8-1.45.27-1.95.8-.76 1.24-.76 2.12.25 1.61.75 2.14 1.15.8 1.96.8z" />
              <path d="m366.2 9.56v6.1h-2.48v-15.45h2.48v6.06c.67-.87 1.66-1.3 2.97-1.3 1.22 0 2.16.38 2.82 1.15.65.77.98 1.76.98 2.97v6.57h-2.48v-6.15c0-.7-.17-1.25-.51-1.67s-.88-.63-1.62-.63c-.66 0-1.17.22-1.55.66s-.58 1-.61 1.69z" />
              <path d="m379 2.09v3.18h2.16v2.2h-2.16v4.82c0 .46.11.79.32.99.21.21.55.31 1 .31.28 0 .57-.03.85-.09v2.05c-.37.16-.88.23-1.52.23-.97 0-1.73-.27-2.28-.82s-.83-1.31-.83-2.27v-5.23h-1.92v-2.2h.53c.53 0 .92-.15 1.19-.45s.41-.69.41-1.17v-1.56h2.24z" />
              <path d="m382.84 12.85 2.16-.6c.04.5.25.92.62 1.26s.87.51 1.49.51c.48 0 .86-.11 1.14-.34s.42-.51.42-.85c0-.6-.41-.98-1.22-1.15l-1.54-.34c-.9-.2-1.59-.57-2.07-1.11s-.73-1.18-.73-1.92c0-.91.37-1.7 1.11-2.36s1.64-.99 2.71-.99c.68 0 1.29.1 1.81.3s.94.46 1.23.78.51.63.67.93.26.6.3.9l-2.09.6c-.06-.4-.24-.76-.54-1.08-.31-.32-.76-.48-1.38-.48-.43 0-.78.12-1.07.35s-.43.52-.43.84c0 .58.35.95 1.05 1.09l1.58.32c.97.21 1.71.6 2.22 1.15s.77 1.22.77 2.01c0 .87-.34 1.64-1.04 2.32-.69.68-1.65 1.01-2.89 1.01-.71 0-1.35-.11-1.91-.32s-1-.49-1.32-.82-.57-.67-.75-1-.28-.66-.31-.99z" />
              <path d="m0 38.45c0-.88.29-1.59.86-2.12.58-.53 1.33-.87 2.27-1.01l2.67-.41c.51-.07.77-.32.77-.75 0-.47-.16-.85-.49-1.14s-.82-.44-1.47-.44-1.12.17-1.49.52-.58.8-.64 1.35l-2.26-.51c.1-.94.55-1.74 1.34-2.4.8-.66 1.81-.99 3.03-.99 1.51 0 2.62.36 3.34 1.09s1.08 1.66 1.08 2.8v5.16c0 .68.04 1.24.13 1.66h-2.3c-.07-.21-.11-.65-.11-1.32-.68 1.1-1.75 1.64-3.2 1.64-1.05 0-1.9-.31-2.55-.93s-.97-1.35-.97-2.21zm3.99 1.2c.77 0 1.39-.21 1.87-.63s.71-1.11.71-2.06v-.47l-2.71.41c-.92.16-1.39.63-1.39 1.41 0 .37.14.69.41.95s.64.4 1.11.4z" />
              <path d="m14.36 35.27v6h-2.48v-10.39h2.41v1.39c.33-.57.76-.99 1.31-1.27s1.13-.42 1.76-.42c1.22 0 2.16.38 2.8 1.15s.96 1.76.96 2.97v6.57h-2.48v-6.15c0-.7-.17-1.25-.51-1.67s-.88-.63-1.62-.63c-.68 0-1.21.23-1.59.69s-.57 1.05-.57 1.76z" />
              <path d="m33.63 25.82v13.55c0 .7.04 1.33.11 1.9h-2.37c-.07-.4-.11-.85-.11-1.34-.26.47-.65.85-1.19 1.15s-1.16.45-1.86.45c-1.48 0-2.68-.52-3.61-1.56s-1.39-2.35-1.39-3.93.47-2.81 1.4-3.86 2.12-1.58 3.55-1.58c.83 0 1.49.15 2 .45s.86.65 1.06 1.05v-6.27h2.41zm-7.94 10.22c0 1 .26 1.8.77 2.4s1.19.91 2.03.91 1.47-.31 1.98-.92.77-1.42.77-2.41-.25-1.76-.75-2.35c-.5-.58-1.16-.88-1.98-.88s-1.5.3-2.03.89-.79 1.38-.79 2.36z" />
              <path d="m46.52 30.56c1.56 0 2.86.52 3.87 1.56 1.02 1.04 1.53 2.35 1.53 3.95s-.51 2.91-1.53 3.96-2.31 1.57-3.87 1.57-2.83-.52-3.85-1.57-1.53-2.36-1.53-3.96.51-2.91 1.53-3.95 2.3-1.56 3.85-1.56zm-2.06 7.93c.56.59 1.25.89 2.06.89s1.5-.29 2.06-.87.84-1.39.84-2.43-.28-1.82-.84-2.4-1.25-.86-2.06-.86-1.5.29-2.06.86c-.56.58-.84 1.38-.84 2.4s.28 1.83.84 2.42z" />
              <path d="m56.66 45.33h-2.45v-14.45h2.39v1.41c.27-.47.7-.86 1.28-1.17s1.26-.47 2.03-.47c1.49 0 2.67.51 3.52 1.53s1.28 2.31 1.28 3.89-.45 2.88-1.34 3.92c-.9 1.03-2.08 1.55-3.54 1.55-.71 0-1.34-.14-1.9-.41s-.97-.61-1.26-1.02v5.23zm5.57-9.26c0-.97-.26-1.75-.77-2.34s-1.19-.89-2.03-.89-1.5.3-2.02.89-.78 1.37-.78 2.34.26 1.77.78 2.37 1.19.9 2.02.9 1.5-.3 2.02-.9.78-1.39.78-2.37z" />
              <path d="m69.44 45.33h-2.45v-14.45h2.39v1.41c.27-.47.7-.86 1.28-1.17s1.26-.47 2.03-.47c1.49 0 2.67.51 3.52 1.53s1.28 2.31 1.28 3.89-.45 2.88-1.34 3.92c-.9 1.03-2.08 1.55-3.54 1.55-.71 0-1.34-.14-1.9-.41s-.97-.61-1.26-1.02v5.23zm5.57-9.26c0-.97-.26-1.75-.77-2.34s-1.19-.89-2.03-.89-1.5.3-2.02.89-.78 1.37-.78 2.34.26 1.77.78 2.37 1.19.9 2.02.9 1.5-.3 2.02-.9.78-1.39.78-2.37z" />
              <path d="m84.33 30.56c1.56 0 2.86.52 3.87 1.56 1.02 1.04 1.53 2.35 1.53 3.95s-.51 2.91-1.53 3.96-2.31 1.57-3.87 1.57-2.83-.52-3.85-1.57-1.53-2.36-1.53-3.96.51-2.91 1.53-3.95 2.3-1.56 3.85-1.56zm-2.06 7.93c.56.59 1.25.89 2.06.89s1.5-.29 2.06-.87.84-1.39.84-2.43-.28-1.82-.84-2.4-1.25-.86-2.06-.86-1.5.29-2.06.86c-.56.58-.84 1.38-.84 2.4s.28 1.83.84 2.42z" />
              <path d="m98.1 30.81v2.52c-.28-.04-.55-.06-.81-.06-1.86 0-2.8 1.02-2.8 3.05v4.95h-2.48v-10.39h2.41v1.66c.24-.55.63-.99 1.17-1.31s1.15-.48 1.83-.48c.23 0 .45.02.66.06z" />
              <path d="m103.64 27.7v3.18h2.16v2.2h-2.16v4.82c0 .46.11.79.32.99.21.21.55.31 1 .31.28 0 .57-.03.85-.09v2.05c-.37.16-.88.23-1.52.23-.97 0-1.73-.27-2.28-.82-.56-.55-.83-1.31-.83-2.27v-5.23h-1.92v-2.2h.53c.53 0 .92-.15 1.19-.45s.41-.69.41-1.17v-1.56h2.24z" />
              <path d="m115.02 40.12c-.24.46-.64.81-1.18 1.07-.55.26-1.13.38-1.76.38-1.21 0-2.17-.39-2.87-1.17s-1.06-1.77-1.06-2.97v-6.55h2.48v6.1c0 .7.17 1.27.51 1.71s.87.66 1.58.66 1.23-.21 1.61-.64.57-.99.57-1.69v-6.15h2.48v8.49c0 .63.04 1.26.11 1.9h-2.37c-.06-.31-.08-.7-.08-1.15z" />
              <path d="m122.93 35.27v6h-2.48v-10.39h2.41v1.39c.33-.57.76-.99 1.31-1.27s1.13-.42 1.76-.42c1.22 0 2.16.38 2.8 1.15s.96 1.76.96 2.97v6.57h-2.48v-6.15c0-.7-.17-1.25-.51-1.67s-.88-.63-1.62-.63c-.68 0-1.21.23-1.59.69s-.57 1.05-.57 1.76z" />
              <path d="m132.69 28.36c-.31-.31-.47-.69-.47-1.13s.16-.82.47-1.14.69-.48 1.13-.48.84.16 1.15.47.47.7.47 1.15-.16.82-.47 1.13-.7.47-1.15.47-.82-.16-1.13-.47zm2.37 12.91h-2.45v-10.39h2.45z" />
              <path d="m141.29 27.7v3.18h2.16v2.2h-2.16v4.82c0 .46.11.79.32.99.21.21.55.31 1 .31.28 0 .57-.03.85-.09v2.05c-.37.16-.88.23-1.52.23-.97 0-1.73-.27-2.28-.82-.56-.55-.83-1.31-.83-2.27v-5.23h-1.92v-2.2h.53c.53 0 .92-.15 1.19-.45s.41-.69.41-1.17v-1.56h2.24z" />
              <path d="m145.96 28.36c-.31-.31-.47-.69-.47-1.13s.16-.82.47-1.14.69-.48 1.13-.48.84.16 1.15.47.47.7.47 1.15-.16.82-.47 1.13-.7.47-1.15.47-.82-.16-1.13-.47zm2.37 12.91h-2.45v-10.39h2.45z" />
              <path d="m158.53 37.64 2.09.66c-.3.95-.86 1.74-1.68 2.36s-1.82.93-3.02.93c-1.48 0-2.73-.5-3.77-1.52-1.03-1.01-1.55-2.36-1.55-4.05 0-1.59.5-2.9 1.5-3.93 1-1.02 2.19-1.54 3.55-1.54 1.59 0 2.84.49 3.73 1.46.9.97 1.34 2.29 1.34 3.94 0 .44-.02.7-.06.79h-7.6c.03.78.32 1.43.86 1.94.55.51 1.21.77 1.97.77 1.34 0 2.21-.6 2.6-1.81zm-5.38-2.71h5.1c-.03-.65-.26-1.2-.69-1.64s-1.06-.66-1.87-.66c-.74 0-1.34.23-1.79.69s-.7 1-.75 1.61z" />
              <path d="m162.09 38.45 2.16-.6c.04.5.25.92.62 1.26s.87.51 1.49.51c.48 0 .86-.11 1.14-.34s.42-.51.42-.85c0-.6-.41-.98-1.22-1.15l-1.54-.34c-.9-.2-1.59-.57-2.07-1.11s-.73-1.18-.73-1.92c0-.91.37-1.7 1.11-2.36s1.64-.99 2.71-.99c.68 0 1.29.1 1.81.3s.94.46 1.23.78.52.63.67.93c.16.3.26.6.3.9l-2.09.6c-.06-.4-.24-.76-.54-1.08-.31-.32-.76-.48-1.38-.48-.43 0-.78.12-1.07.35s-.43.52-.43.84c0 .58.35.95 1.05 1.09l1.58.32c.97.21 1.71.6 2.22 1.15s.77 1.22.77 2.01c0 .87-.35 1.64-1.03 2.32-.69.68-1.65 1.01-2.89 1.01-.71 0-1.35-.11-1.91-.32s-1-.49-1.32-.82-.57-.67-.75-1-.28-.66-.31-.99z" />
              <path d="m177.92 28.36c-.31-.31-.47-.69-.47-1.13s.16-.82.47-1.14.69-.48 1.13-.48.84.16 1.15.47.47.7.47 1.15-.16.82-.47 1.13-.7.47-1.15.47-.82-.16-1.13-.47zm2.37 12.91h-2.45v-10.39h2.45z" />
              <path d="m185.86 35.27v6h-2.48v-10.39h2.41v1.39c.33-.57.76-.99 1.31-1.27s1.13-.42 1.76-.42c1.22 0 2.16.38 2.8 1.15s.96 1.76.96 2.97v6.57h-2.48v-6.15c0-.7-.17-1.25-.51-1.67s-.88-.63-1.62-.63c-.68 0-1.21.23-1.59.69s-.57 1.05-.57 1.76z" />
              <path d="m203.85 27.7v3.18h2.16v2.2h-2.16v4.82c0 .46.11.79.32.99.21.21.55.31 1 .31.28 0 .57-.03.85-.09v2.05c-.37.16-.88.23-1.52.23-.97 0-1.73-.27-2.28-.82-.56-.55-.83-1.31-.83-2.27v-5.23h-1.92v-2.2h.53c.53 0 .92-.15 1.19-.45s.41-.69.41-1.17v-1.56h2.24z" />
              <path d="m210.62 35.17v6.1h-2.48v-15.45h2.48v6.06c.67-.87 1.66-1.3 2.97-1.3 1.22 0 2.16.38 2.82 1.15.65.77.98 1.76.98 2.97v6.57h-2.48v-6.15c0-.7-.17-1.25-.51-1.67s-.88-.63-1.62-.63c-.65 0-1.17.22-1.55.66s-.58 1-.61 1.69z" />
              <path d="m227.39 37.64 2.09.66c-.3.95-.86 1.74-1.68 2.36s-1.82.93-3.02.93c-1.48 0-2.73-.5-3.77-1.52-1.03-1.01-1.55-2.36-1.55-4.05 0-1.59.5-2.9 1.5-3.93 1-1.02 2.19-1.54 3.55-1.54 1.59 0 2.84.49 3.73 1.46.9.97 1.34 2.29 1.34 3.94 0 .44-.02.7-.06.79h-7.6c.03.78.32 1.43.86 1.94.55.51 1.21.77 1.97.77 1.34 0 2.21-.6 2.6-1.81zm-5.38-2.71h5.1c-.03-.65-.26-1.2-.69-1.64s-1.06-.66-1.87-.66c-.74 0-1.34.23-1.79.69s-.7 1-.75 1.61z" />
              <path d="m247.62 41.27-1.43-3.8h-6.4l-1.41 3.8h-2.71l5.89-15.13h2.97l5.89 15.13zm-4.63-12.36-2.3 6.19h4.61l-2.3-6.19z" />
              <path d="m262.13 29.68-2.3.73c-.1-.58-.39-1.12-.87-1.6s-1.18-.73-2.09-.73c-.75 0-1.38.21-1.87.64s-.74.94-.74 1.54c0 1.04.59 1.69 1.77 1.94l2.18.45c1.31.26 2.32.78 3.03 1.56s1.07 1.71 1.07 2.8c0 1.25-.48 2.33-1.44 3.23s-2.27 1.36-3.92 1.36c-1.78 0-3.17-.47-4.16-1.4-1-.93-1.56-2.02-1.69-3.25l2.39-.68c.08.85.43 1.57 1.02 2.16.6.58 1.41.88 2.43.88.88 0 1.56-.2 2.04-.59s.71-.89.71-1.5c0-.5-.18-.93-.53-1.29-.36-.36-.85-.62-1.49-.76l-2.13-.45c-1.18-.24-2.12-.73-2.81-1.47s-1.03-1.66-1.03-2.77c0-1.27.5-2.35 1.52-3.27 1.01-.91 2.22-1.37 3.63-1.37 1.61 0 2.84.39 3.69 1.16s1.39 1.67 1.6 2.7z" />
              <path d="m274.21 41.27h-9.35v-15.13h9.35v2.39h-6.79v4.01h6.15v2.33h-6.15v4.01h6.79z" />
              <path d="m287.52 41.27-1.43-3.8h-6.4l-1.41 3.8h-2.71l5.89-15.13h2.97l5.89 15.13zm-4.63-12.36-2.3 6.19h4.61l-2.3-6.19z" />
              <path d="m304.94 41.27h-2.67l-7.47-11.46v11.46h-2.56v-15.13h3.26l6.87 10.73v-10.73h2.56v15.13z" />
              <path d="m319.51 30.81v2.52c-.29-.04-.56-.06-.81-.06-1.86 0-2.79 1.02-2.79 3.05v4.95h-2.48v-10.39h2.41v1.66c.24-.55.63-.99 1.17-1.31s1.15-.48 1.83-.48c.23 0 .45.02.66.06z" />
              <path d="m328.47 37.64 2.09.66c-.3.95-.86 1.74-1.67 2.36-.82.62-1.83.93-3.02.93-1.48 0-2.74-.5-3.77-1.52-1.03-1.01-1.55-2.36-1.55-4.05 0-1.59.5-2.9 1.5-3.93 1-1.02 2.19-1.54 3.55-1.54 1.59 0 2.84.49 3.73 1.46.9.97 1.34 2.29 1.34 3.94 0 .44-.02.7-.06.79h-7.6c.03.78.32 1.43.86 1.94s1.21.77 1.97.77c1.34 0 2.2-.6 2.6-1.81zm-5.38-2.71h5.1c-.03-.65-.26-1.2-.69-1.64s-1.06-.66-1.87-.66c-.74 0-1.34.23-1.79.69-.46.46-.7 1-.75 1.61z" />
              <path d="m332.21 41.85 2.28-.6c.09.65.37 1.19.84 1.61.48.42 1.06.63 1.76.63 1.96 0 2.95-1.04 2.95-3.12v-1.09c-.24.44-.63.8-1.15 1.09-.53.29-1.15.43-1.86.43-1.39 0-2.54-.48-3.45-1.43-.9-.95-1.35-2.16-1.35-3.63s.45-2.6 1.34-3.58c.9-.98 2.05-1.47 3.46-1.47 1.52 0 2.55.51 3.07 1.52v-1.32h2.39v9.41c0 1.54-.43 2.81-1.3 3.83s-2.21 1.53-4.03 1.53c-1.34 0-2.46-.36-3.37-1.09s-1.44-1.63-1.58-2.71zm5.23-3.16c.8 0 1.44-.27 1.93-.8s.74-1.25.74-2.14-.25-1.59-.75-2.12-1.14-.8-1.92-.8-1.45.27-1.95.8-.76 1.24-.76 2.12.25 1.61.75 2.14 1.15.8 1.96.8z" />
              <path d="m345.5 28.36c-.31-.31-.47-.69-.47-1.13s.16-.82.47-1.14.69-.48 1.13-.48.84.16 1.15.47.47.7.47 1.15-.16.82-.47 1.13-.7.47-1.15.47-.82-.16-1.13-.47zm2.37 12.91h-2.45v-10.39h2.45z" />
              <path d="m355.53 30.56c1.56 0 2.86.52 3.87 1.56 1.02 1.04 1.53 2.35 1.53 3.95s-.51 2.91-1.53 3.96-2.31 1.57-3.87 1.57-2.83-.52-3.85-1.57-1.53-2.36-1.53-3.96.51-2.91 1.53-3.95 2.3-1.56 3.85-1.56zm-2.06 7.93c.56.59 1.25.89 2.06.89s1.5-.29 2.06-.87.84-1.39.84-2.43-.28-1.82-.84-2.4-1.25-.86-2.06-.86-1.5.29-2.06.86c-.56.58-.84 1.38-.84 2.4s.28 1.83.84 2.42z" />
              <path d="m365.69 35.27v6h-2.48v-10.39h2.41v1.39c.33-.57.76-.99 1.31-1.27s1.13-.42 1.76-.42c1.22 0 2.16.38 2.79 1.15.64.77.96 1.76.96 2.97v6.57h-2.48v-6.15c0-.7-.17-1.25-.51-1.67s-.88-.63-1.62-.63c-.68 0-1.21.23-1.59.69s-.57 1.05-.57 1.76z" />
            </g>
          </svg>
        </div>
        <div className="flex items-center">
          <div className="max-w-full" style={{ width: bottomWidth }}>
            <svg viewBox="0 0 227.74 13.25" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="m0 13.07 2.24-12.89h3.35c1.05 0 1.96.27 2.71.8s1.3 1.25 1.63 2.17.43 1.96.29 3.1l-.09.65c-.26 1.88-.99 3.38-2.19 4.49s-2.7 1.68-4.52 1.68zm3.66-11.5-1.75 10.1h1.64c1.25 0 2.31-.38 3.18-1.16s1.44-1.85 1.7-3.21c.21-1.09.28-2.01.21-2.77-.09-.91-.39-1.63-.91-2.15s-1.22-.79-2.09-.81h-1.97z" />
                <path d="m17.03 13.07h-1.66l2.24-12.89h1.66z" />
                <path d="m33.38 11.37c-.43.61-1.06 1.08-1.88 1.4-.82.33-1.76.49-2.82.47-.84-.02-1.58-.21-2.21-.59s-1.13-.92-1.49-1.62c-.36-.71-.57-1.51-.62-2.4-.04-.7.05-1.65.26-2.85.22-1.2.59-2.23 1.13-3.11.54-.87 1.21-1.54 2.01-2 .81-.47 1.73-.69 2.77-.67 1.2.02 2.15.38 2.86 1.07s1.12 1.65 1.22 2.9h-1.65c-.06-.82-.31-1.45-.73-1.88-.42-.44-1.01-.67-1.76-.69-1.11-.04-2.04.36-2.78 1.2-.75.84-1.24 2.07-1.47 3.68l-.17 1.24-.03.67c0 1.17.24 2.07.72 2.7s1.15.96 2.01.97c1.25.03 2.23-.28 2.97-.92l.53-2.89h-2.9l.25-1.39h4.53l-.73 4.72z" />
                <path d="m41.22 13.07h-1.66l2.24-12.89h1.66z" />
                <path d="m58.32 1.57h-4.01l-1.99 11.5h-1.66l1.99-11.5h-4.01l.25-1.39h9.68z" />
                <path d="m68.71 9.7h-5.22l-1.76 3.37h-1.78l7-12.89h1.46l2.55 12.89h-1.64zm-4.49-1.39h4.24l-1.07-6.01z" />
                <path d="m78.29 11.68h5.93l-.25 1.39h-7.6l2.24-12.89h1.67l-2 11.5z" />
                <path d="m104.87 9.75c.13-.94-.36-1.63-1.47-2.07l-1.53-.56-.51-.22c-1.72-.79-2.53-1.89-2.42-3.31.06-.71.3-1.35.73-1.89s1-.97 1.71-1.27 1.47-.44 2.27-.42c.78.02 1.47.19 2.08.52s1.08.79 1.39 1.38c.32.59.46 1.26.43 2.01h-1.67c.06-.8-.12-1.42-.53-1.85s-1-.66-1.77-.67c-.81-.01-1.48.18-2.03.57-.54.39-.86.92-.94 1.6-.12.88.42 1.55 1.62 2l1.32.47.66.28c1.66.77 2.43 1.91 2.31 3.42-.06.73-.31 1.35-.73 1.88s-1 .94-1.73 1.23-1.51.42-2.35.41c-.81 0-1.55-.18-2.22-.52s-1.18-.8-1.53-1.39-.5-1.26-.46-2.01h1.66c-.05.78.15 1.39.62 1.84s1.13.68 1.99.7c.86.01 1.56-.17 2.12-.56s.88-.9.97-1.55z" />
                <path d="m122.42 1.57h-4.01l-1.99 11.5h-1.66l1.99-11.5h-4.01l.25-1.39h9.68z" />
                <path d="m130.46 13.25c-.82-.02-1.53-.21-2.14-.59s-1.08-.93-1.43-1.67-.54-1.56-.58-2.47c-.04-.71.04-1.6.24-2.65.19-1.05.53-2 1.01-2.84s1.06-1.52 1.74-2.03c.93-.68 1.98-1.01 3.17-.99 1.26.02 2.25.46 2.98 1.31s1.12 1.99 1.17 3.44c.02.62-.04 1.41-.19 2.36s-.42 1.84-.81 2.66-.88 1.51-1.47 2.06c-1.04.97-2.27 1.44-3.69 1.41zm4.52-8.09c.04-1.16-.17-2.06-.61-2.71-.44-.64-1.1-.97-1.97-1-.79-.02-1.5.19-2.12.64s-1.13 1.12-1.53 2.01-.65 2.03-.76 3.4l-.03.58c-.04 1.16.17 2.06.62 2.72s1.1 1 1.96 1.02c1.12.03 2.04-.37 2.78-1.21s1.22-2.01 1.47-3.52c.12-.74.19-1.39.2-1.93z" />
                <path d="m147.09 7.86h-2.97l-.9 5.21h-1.67l2.24-12.89h3.88c1.35.01 2.38.36 3.09 1.04s1.01 1.6.89 2.77c-.06.81-.36 1.52-.88 2.14s-1.22 1.08-2.08 1.39l2 5.44v.12h-1.78l-1.81-5.21zm-2.74-1.4h2.44c.85 0 1.57-.22 2.15-.67s.93-1.05 1.03-1.81c.09-.74-.06-1.32-.44-1.74s-.97-.64-1.75-.66h-2.58s-.85 4.88-.85 4.88z" />
                <path d="m160.55 6.64 4.38-6.46h1.98l-5.78 8.17-.82 4.72h-1.66l.85-4.91-2.88-7.99h1.81l2.12 6.46z" />
                <path d="m169.94 13.07 2.24-12.89h3.78c1.32 0 2.3.3 2.96.89s.94 1.41.86 2.47c-.11 1.23-.88 2.16-2.33 2.79.58.22 1.01.61 1.3 1.15s.4 1.14.35 1.8c-.09 1.16-.55 2.08-1.4 2.77-.84.68-1.94 1.02-3.28 1.02zm2.71-6.03-.81 4.63h2.63c.8 0 1.48-.21 2.02-.64s.86-1.01.95-1.74c.08-.7-.04-1.24-.36-1.63s-.84-.6-1.53-.62zm.24-1.36h2.4c.75 0 1.38-.18 1.9-.57.52-.38.82-.91.91-1.59.08-.63-.05-1.1-.37-1.42s-.85-.49-1.6-.52h-2.53s-.71 4.1-.71 4.1z" />
                <path d="m189.33 13.25c-.82-.02-1.53-.21-2.14-.59s-1.08-.93-1.43-1.67-.54-1.56-.58-2.47c-.04-.71.04-1.6.24-2.65.19-1.05.53-2 1.01-2.84s1.06-1.52 1.74-2.03c.93-.68 1.98-1.01 3.17-.99 1.26.02 2.25.46 2.98 1.31s1.12 1.99 1.17 3.44c.02.62-.04 1.41-.19 2.36s-.42 1.84-.81 2.66-.88 1.51-1.47 2.06c-1.04.97-2.27 1.44-3.69 1.41zm4.52-8.09c.04-1.16-.17-2.06-.61-2.71-.44-.64-1.1-.97-1.97-1-.79-.02-1.5.19-2.12.64s-1.13 1.12-1.53 2.01-.65 2.03-.76 3.4l-.03.58c-.04 1.16.17 2.06.62 2.72s1.1 1 1.96 1.02c1.12.03 2.04-.37 2.78-1.21s1.22-2.01 1.47-3.52c.12-.74.19-1.39.2-1.93z" />
                <path d="m205.14 13.25c-.82-.02-1.53-.21-2.14-.59s-1.08-.93-1.43-1.67-.54-1.56-.58-2.47c-.04-.71.04-1.6.24-2.65.19-1.05.53-2 1.01-2.84s1.06-1.52 1.74-2.03c.93-.68 1.98-1.01 3.17-.99 1.26.02 2.25.46 2.98 1.31s1.12 1.99 1.17 3.44c.02.62-.04 1.41-.19 2.36s-.42 1.84-.81 2.66-.88 1.51-1.47 2.06c-1.04.97-2.27 1.44-3.69 1.41zm4.52-8.09c.04-1.16-.17-2.06-.61-2.71-.44-.64-1.1-.97-1.97-1-.79-.02-1.5.19-2.12.64s-1.13 1.12-1.53 2.01-.65 2.03-.76 3.4l-.03.58c-.04 1.16.17 2.06.62 2.72s1.1 1 1.96 1.02c1.12.03 2.04-.37 2.78-1.21s1.22-2.01 1.47-3.52c.12-.74.19-1.39.2-1.93z" />
                <path d="m220.52 7.09-1.89 1.69-.74 4.29h-1.66l2.24-12.89h1.66l-1.1 6.28 6.57-6.28h2.14l-5.99 5.77 4.01 7.12h-1.85z" />
              </g>
            </svg>
          </div>
          <div className="ml-3 flex-grow">
            <Fade direction="right" delay={1200} triggerOnce={true}>
              <div
                className={`h-[1px] flex-grow ${
                  color === "dark" ? "bg-neutral-700" : "bg-white "
                }`}
              ></div>
            </Fade>
          </div>
        </div>
      </Fade>
    </div>
  );
}
