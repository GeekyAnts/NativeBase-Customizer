import * as React from "react";
export default (props: any) => (
  <div style={{ position: "relative", width: props.width }}>
    <NetworkSection left={3} />
    <TimeSection left={props.width / 2 - 20} />
    <BatterySection left={props.width - 65} />
  </div>
);

export class BatterySection extends React.Component<any, any> {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: this.props.left
        }}
      >
        <svg version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g fill="#FFF" stroke="none" strokeWidth={1} fillRule="evenodd">
            <g strokeWidth={1} fillRule="evenodd">
              <path d="M37.494 2.5h19.512c.82 0 1.494.674 1.494 1.505v6.49c0 .837-.669 1.505-1.494 1.505H37.494c-.82 0-1.494-.674-1.494-1.505v-6.49c0-.837.669-1.505 1.494-1.505zM59 5.5h.75c.417 0 .75.332.75.742v2.016a.748.748 0 0 1-.75.742H59V5.5zM37.508 3c-.557 0-1.008.457-1.008 1.008v6.484c0 .557.45 1.008 1.008 1.008h19.484c.557 0 1.008-.457 1.008-1.008V4.008C58 3.451 57.55 3 56.992 3H37.508zm-.001.5h19.486c.277 0 .507.22.507.492v6.516a.497.497 0 0 1-.507.492H37.507a.502.502 0 0 1-.507-.492V3.992c0-.276.227-.492.507-.492z" />
              <text
                fontFamily=".AppleSystemUIFont"
                fontSize={12}
                fontWeight="normal"
              >
                <tspan x="2.85351562" y="12.5">
                  100%
                </tspan>
              </text>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
export class NetworkSection extends React.Component<any, any> {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: this.props.left
        }}
      >
        <svg version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g fill="#FFF" stroke="none" strokeWidth={1} fillRule="evenodd">
            <g strokeWidth={1} fillRule="evenodd">
              <path d="M90.144 9.439L88.023 11.5 85.86 9.405a2.857 2.857 0 0 1 2.128-.936c.864 0 1.638.376 2.156.97zm2.18-2.118l-1.09 1.058a4.417 4.417 0 0 0-3.246-1.402c-1.274 0-2.42.528-3.219 1.372l-1.09-1.056a5.979 5.979 0 0 1 4.309-1.809c1.713 0 3.257.708 4.335 1.837zM94.5 5.207l-1.088 1.057a7.539 7.539 0 0 0-5.424-2.272 7.54 7.54 0 0 0-5.398 2.245L81.5 5.182A9.1 9.1 0 0 1 87.988 2.5 9.1 9.1 0 0 1 94.5 5.207z" />
              <text
                fontFamily=".AppleSystemUIFont"
                fontSize={12}
                fontWeight="normal"
              >
                <tspan x={38} y="12.5">
                  Carrier
                </tspan>
              </text>
              <path d="M3.25 10a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5zm7 0a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5zm7 0a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5zm7 0a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5zm7 0a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5z" />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export class TimeSection extends React.Component<any, any> {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: this.props.left
        }}
      >
        <svg version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g fill="#FFF" stroke="none" strokeWidth={1} fillRule="evenodd">
            <text
              fontFamily=".AppleSystemUIFont"
              fontSize={12}
              fontWeight="normal"
            >
              <tspan x="0" y="12.5">
                9:41 AM
              </tspan>
            </text>
          </g>
        </svg>
      </div>
    );
  }
}
