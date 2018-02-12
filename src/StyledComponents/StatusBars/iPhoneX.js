import * as React from "react";
export default (props: any) => (
  <div style={{ position: "relative", width: "100%", zIndex: 1 }}>
    <LeftSection left={14} width={83} color={props.color} />
    <RightSection left={props.width - 80} width={83} color={props.color} />
  </div>
);

export class RightSection extends React.Component<any, any> {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: 18,
          left: this.props.left
        }}
      >
        <svg
          width="97px"
          height="18px"
          viewBox="0 0 145 27"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            transform="translate(-461.000000, -204.000000) translate(88.000000, 201.000000) translate(373.000000, 3.000000)"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <path
              d="M0 11.99c0-.546.444-.99 1-.99h3a1 1 0 0 1 1 .99v4.02c0 .546-.444.99-1 .99H1a1 1 0 0 1-1-.99v-4.02zm7-2.992C7 8.447 7.444 8 8 8h3c.552 0 1 .446 1 .998v7.004c0 .551-.444.998-1 .998H8c-.552 0-1-.446-1-.998V8.998zm7-4A.997.997 0 0 1 15 4h3a1 1 0 0 1 1 .999V16A.997.997 0 0 1 18 17h-3a1 1 0 0 1-1-.999V5zm7-2.997C21 1.448 21.444 1 22 1h3c.552 0 1 .445 1 1v14c0 .552-.444 1-1 1h-3c-.552 0-1-.445-1-1V2z"
              fill={this.props.color}
            />
            <path
              d="M32.348 5.634C38.603-.621 48.745-.621 55 5.634l-2.35 2.35c-4.957-4.957-12.994-4.957-17.951 0l-2.35-2.35zm3.858 3.857c4.125-4.124 10.812-4.124 14.936 0l-2.028 2.03a7.692 7.692 0 0 0-10.88 0l-2.028-2.03zm3.33 3.33a5.853 5.853 0 0 1 8.277 0l-4.139 4.139-4.138-4.139z"
              fill={this.props.color}
            />
            <g transform="translate(61.000000, 0.000000)">
              <rect
                stroke={this.props.color}
                // stroke="none"
                opacity="0.300000012"
                x="0.5"
                y="0.5"
                width={31}
                height={17}
                rx={6}
              />
              <rect
                fill={this.props.color}
                x={3}
                y={3}
                width={26}
                height={12}
                rx={3}
              />
              <path d="M34 7a2 2 0 1 1 0 4V7z" fill={this.props.color} />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export class LeftSection extends React.Component<any, any> {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: 17,
          left: this.props.left
        }}
      >
        <svg version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g
            fill={this.props.color}
            stroke="none"
            strokeWidth={1}
            fillRule="evenodd"
          >
            <g fill={this.props.color}>
              <text
                fontFamily=".AppleSystemUIFont"
                fontSize="11.9931181"
                fontWeight="normal"
              >
                <tspan x={0} y={13}>
                  9:41 AM
                </tspan>
              </text>
              <path
                d="M61.797 2.5a2.163 2.163 0 0 0-.763.134l-.339.133 2.764 2.763.242.221.12-.312a2.186 2.186 0 0 0-.495-2.304 2.18 2.18 0 0 0-1.529-.636zm-5.535.002a2.185 2.185 0 0 0-1.656.633 2.18 2.18 0 0 0-.502 2.292l.133.34L57 3.002l.22-.241-.31-.122-.046-.019a2.153 2.153 0 0 0-.602-.119zm2.704.866a4.568 4.568 0 0 0-4.562 4.562 4.568 4.568 0 0 0 4.562 4.563A4.568 4.568 0 0 0 63.53 7.93a4.568 4.568 0 0 0-4.563-4.562zm0 1.303c.12 0 .217.098.217.217V7.93c0 .12-.097.217-.217.217h-1.738a.217.217 0 0 1 0-.434h1.52V4.888c0-.12.098-.217.218-.217z"
                fillRule="nonzero"
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
