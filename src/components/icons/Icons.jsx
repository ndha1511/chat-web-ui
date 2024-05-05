// import React from 'react';

// function VideoIcon({ fillColor }) {
//   return (
//     <svg width="25" height="21" viewBox="0 0 20 16"  xmlns="http://www.w3.org/2000/svg">
//       <path fill={fillColor} fillRule="evenodd" clipRule="evenodd" d="M2.99768 1.20037C2.00357 1.20037 1.19768 2.00625 1.19768 3.00036V12.9996C1.19768 13.9937 2.00357 14.7996 2.99768 14.7996H12.9288C13.9229 14.7996 14.7288 13.9937 14.7288 12.9996V10.5C14.7288 10.2656 14.8653 10.0526 15.0784 9.95477C15.2914 9.85693 15.5419 9.89214 15.7198 10.0449L18.1418 12.1259C18.4012 12.3487 18.8025 12.1644 18.8025 11.8225V4.17759C18.8025 3.83563 18.4012 3.65134 18.1418 3.87419L15.7198 5.95512C15.5419 6.1079 15.2914 6.14312 15.0784 6.04528C14.8653 5.94744 14.7288 5.73447 14.7288 5.50002V3.00037C14.7288 2.00625 13.9229 1.20037 12.9288 1.20037H2.99768ZM-0.00231934 3.00036C-0.00231934 1.34351 1.34083 0.000366211 2.99768 0.000366211H12.9288C14.5856 0.000366211 15.9288 1.34351 15.9288 3.00037V4.19348L17.3598 2.964C18.3973 2.07261 20.0025 2.80975 20.0025 4.17759V11.8225C20.0025 13.1903 18.3973 13.9274 17.3598 13.0361L15.9288 11.8066V12.9996C15.9288 14.6565 14.5856 15.9996 12.9288 15.9996H2.99768C1.34083 15.9996 -0.00231934 14.6565 -0.00231934 12.9996V3.00036Z" />
//     </svg>
//   );
// }

// export default VideoIcon ;

import React from 'react';

class Icons extends React.Component {
  render() {
    const { type, fillColor, size } = this.props;
    let iconSvg;

    switch (type) {
      case 'video':
        iconSvg = (
          <svg width={size} height={size} viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
            <path fill={fillColor} fillRule="evenodd" clipRule="evenodd" d="M2.99768 1.20037C2.00357 1.20037 1.19768 2.00625 1.19768 3.00036V12.9996C1.19768 13.9937 2.00357 14.7996 2.99768 14.7996H12.9288C13.9229 14.7996 14.7288 13.9937 14.7288 12.9996V10.5C14.7288 10.2656 14.8653 10.0526 15.0784 9.95477C15.2914 9.85693 15.5419 9.89214 15.7198 10.0449L18.1418 12.1259C18.4012 12.3487 18.8025 12.1644 18.8025 11.8225V4.17759C18.8025 3.83563 18.4012 3.65134 18.1418 3.87419L15.7198 5.95512C15.5419 6.1079 15.2914 6.14312 15.0784 6.04528C14.8653 5.94744 14.7288 5.73447 14.7288 5.50002V3.00037C14.7288 2.00625 13.9229 1.20037 12.9288 1.20037H2.99768ZM-0.00231934 3.00036C-0.00231934 1.34351 1.34083 0.000366211 2.99768 0.000366211H12.9288C14.5856 0.000366211 15.9288 1.34351 15.9288 3.00037V4.19348L17.3598 2.964C18.3973 2.07261 20.0025 2.80975 20.0025 4.17759V11.8225C20.0025 13.1903 18.3973 13.9274 17.3598 13.0361L15.9288 11.8066V12.9996C15.9288 14.6565 14.5856 15.9996 12.9288 15.9996H2.99768C1.34083 15.9996 -0.00231934 14.6565 -0.00231934 12.9996V3.00036Z" />
          </svg>
        );
        break;
      case 'video1':
        iconSvg = (
          <svg width={size} height={size}  xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.99768 5.20037C4.00357 5.20037 3.19768 6.00625 3.19768 7.00036V16.9996C3.19768 17.9937 4.00357 18.7996 4.99768 18.7996H14.9288C15.9229 18.7996 16.7288 17.9937 16.7288 16.9996V14.5C16.7288 14.2656 16.8653 14.0526 17.0784 13.9548C17.2914 13.8569 17.5419 13.8921 17.7198 14.0449L20.1418 16.1259C20.4012 16.3487 20.8025 16.1644 20.8025 15.8225V8.17759C20.8025 7.83563 20.4012 7.65134 20.1418 7.87419L17.7198 9.95512C17.5419 10.1079 17.2914 10.1431 17.0784 10.0453C16.8653 9.94744 16.7288 9.73447 16.7288 9.50002V7.00037C16.7288 6.00625 15.9229 5.20037 14.9288 5.20037H4.99768ZM1.99768 7.00036C1.99768 5.34351 3.34083 4.00037 4.99768 4.00037H14.9288C16.5856 4.00037 17.9288 5.34351 17.9288 7.00037V8.19348L19.3598 6.964C20.3973 6.07261 22.0025 6.80975 22.0025 8.17759V15.8225C22.0025 17.1903 20.3973 17.9274 19.3598 17.0361L17.9288 15.8066V16.9996C17.9288 18.6565 16.5856 19.9996 14.9288 19.9996H4.99768C3.34083 19.9996 1.99768 18.6565 1.99768 16.9996V7.00036Z" fill="#141415" />
          </svg>
        );
        break;
      case 'contact':
        iconSvg = (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.56252 3.05625C3.8939 3.05625 4.16252 3.32488 4.16252 3.65625V6.25C4.16252 6.58137 3.8939 6.85 3.56252 6.85C3.23115 6.85 2.96252 6.58137 2.96252 6.25V3.65625C2.96252 3.32488 3.23115 3.05625 3.56252 3.05625Z" fill={fillColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.56252 17.1812C3.8939 17.1812 4.16252 17.4499 4.16252 17.7812V20.375C4.16252 20.7064 3.8939 20.975 3.56252 20.975C3.23115 20.975 2.96252 20.7064 2.96252 20.375V17.7812C2.96252 17.4499 3.23115 17.1812 3.56252 17.1812Z" fill={fillColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.56252 8.025C3.8939 8.025 4.16252 8.29363 4.16252 8.625V15.4688C4.16252 15.8001 3.8939 16.0687 3.56252 16.0687C3.23115 16.0687 2.96252 15.8001 2.96252 15.4688V8.625C2.96252 8.29363 3.23115 8.025 3.56252 8.025Z" fill={fillColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M6.56252 3C6.14248 2.99996 5.93245 2.99993 5.77201 3.08166C5.63089 3.15356 5.51615 3.26829 5.44424 3.4094C5.36249 3.56983 5.36249 3.77986 5.36249 4.19991V19.8001C5.36249 20.2201 5.36249 20.4301 5.44423 20.5905C5.51613 20.7316 5.63085 20.8464 5.77196 20.9183C5.93238 21 6.14238 21 6.56239 21H15.9998C17.3998 21 18.0998 21 18.6345 20.7275C19.1049 20.4879 19.4873 20.1055 19.727 19.6351C19.9994 19.1004 19.9994 18.4003 19.9994 17.0003V7.00069C19.9994 5.60082 19.9994 4.90087 19.727 4.36617C19.4874 3.89583 19.105 3.51341 18.6347 3.27373C18.1 3.00125 17.4001 3.00117 16.0002 3.00101L6.56252 3ZM6.56241 4C6.48501 3.99999 6.42007 4 6.36293 4.00042C6.3625 4.05756 6.36249 4.1225 6.36249 4.19991V19.8001C6.36249 19.8775 6.3625 19.9424 6.36293 19.9996C6.42006 20 6.485 20 6.56239 20H15.9998C16.7163 20 17.1935 19.9992 17.5602 19.9693C17.9152 19.9403 18.0776 19.889 18.1805 19.8365C18.4627 19.6927 18.6922 19.4633 18.836 19.1811C18.8884 19.0782 18.9397 18.9158 18.9687 18.5608C18.9987 18.1941 18.9994 17.7168 18.9994 17.0003V7.00069C18.9994 6.28425 18.9987 5.80706 18.9687 5.44042C18.9397 5.08545 18.8884 4.92302 18.836 4.82013C18.6922 4.53794 18.4628 4.3085 18.1806 4.1647C18.0777 4.11226 17.9153 4.06096 17.5604 4.03192C17.1937 4.00192 16.7165 4.00109 16.0001 4.00101L6.56241 4Z" fill={fillColor} />
            <path d="M14.6852 9.33295C14.6852 8.16647 14.1081 7 12.6687 7C11.2292 7 10.6522 8.16647 10.6522 9.33295C10.6522 11.0827 11.5146 11.9637 12.6687 11.9637C13.8227 11.9637 14.6852 11.0889 14.6852 9.33295Z" fill={fillColor} />
            <path d="M9.5338 14.2164L9.3655 14.351C8.77758 14.8214 8.37433 15.4839 8.22667 16.2222C8.1462 16.6246 8.45396 17 8.86429 17H16.4976C16.908 17 17.2157 16.6246 17.1353 16.2222C16.9876 15.4839 16.5844 14.8214 15.9964 14.351L15.8281 14.2164C15.2776 13.7759 14.6151 13.4977 13.9151 13.413L13.3689 13.3469C12.912 13.2916 12.45 13.2916 11.993 13.3469L11.4468 13.413C10.7469 13.4977 10.0844 13.7759 9.5338 14.2164Z" fill={fillColor} />
          </svg>
        );
        break;
      case 'Sticker':
        iconSvg = (
          <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.6656 6.91554C6.41797 4.37861 9.81531 3 16 3C22.1792 3 25.5787 4.34629 27.333 6.86905C28.1948 8.10832 28.6029 9.55769 28.8025 11.0922C29 12.6101 29 14.2746 29 15.9682V16C29 17.7122 28.9822 19.3885 28.7584 20.92C28.5336 22.4576 28.0944 23.9035 27.2145 25.1383C25.4251 27.6494 22.0374 29 16 29C9.9571 29 6.57151 27.6171 4.78404 25.0918C3.90558 23.8507 3.46652 22.4023 3.24171 20.8704C3.01777 19.3443 3 17.6829 3 16L3 15.9688V15.9688C2.99999 14.3042 2.99999 12.6543 3.19752 11.1418C3.39721 9.61287 3.80522 8.16114 4.6656 6.91554ZM4.73998 11.3433C4.55681 12.7458 4.55556 14.3001 4.55556 16C4.55556 17.6922 4.57556 19.2461 4.78078 20.6445C4.98513 22.037 5.36663 23.2224 6.05372 24.1931C7.39735 26.0913 10.1229 27.4444 16 27.4444C21.8826 27.4444 24.6061 26.1183 25.9477 24.2355C26.6334 23.2733 27.0148 22.093 27.2192 20.695C27.4244 19.2909 27.4444 17.7222 27.4444 16C27.4444 14.2702 27.4432 12.7011 27.26 11.2929C27.0777 9.89173 26.7219 8.71484 26.0559 7.75716C24.7547 5.88599 22.043 4.55555 16 4.55555C9.96247 4.55555 7.24869 5.91298 5.94551 7.79963C5.27812 8.76582 4.92224 9.94775 4.73998 11.3433ZM17.0776 21.1744L17.2059 21.527C17.5312 22.4208 18.5195 22.8816 19.4133 22.5563C20.3071 22.231 20.7679 21.2427 20.4426 20.3489L20.3867 20.1954C19.4347 20.7382 18.3254 21.0598 17.0776 21.1744ZM15.4349 21.2095L15.7442 22.059C16.3633 23.7601 18.2442 24.6372 19.9453 24.0181C21.6464 23.3989 22.5235 21.518 21.9044 19.8169L21.6873 19.2206C21.8489 19.0641 22.0036 18.8981 22.1511 18.7225C22.4274 18.3936 22.3847 17.903 22.0558 17.6267C21.7269 17.3504 21.2363 17.393 20.96 17.7219C19.9017 18.9818 18.2967 19.6667 16 19.6667C13.7033 19.6667 12.0983 18.9818 11.04 17.7219C10.7637 17.393 10.2731 17.3504 9.94417 17.6267C9.61526 17.903 9.57261 18.3936 9.84891 18.7225C11.1753 20.3015 13.0759 21.1012 15.4349 21.2095ZM21.2778 14.8889C22.0448 14.8889 22.6667 13.894 22.6667 12.6667C22.6667 11.4394 22.0448 10.4444 21.2778 10.4444C20.5107 10.4444 19.8889 11.4394 19.8889 12.6667C19.8889 13.894 20.5107 14.8889 21.2778 14.8889ZM12.1111 12.6667C12.1111 13.894 11.4893 14.8889 10.7222 14.8889C9.95516 14.8889 9.33333 13.894 9.33333 12.6667C9.33333 11.4394 9.95516 10.4444 10.7222 10.4444C11.4893 10.4444 12.1111 11.4394 12.1111 12.6667Z" fill="#141415" />
          </svg>
       
        );
        break;
        case 'like':
          iconSvg = (
            <svg width={size} height={size}  xmlns="http://www.w3.org/2000/svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
            </svg>
          );
          break;
      default:
        iconSvg = null;
        
    }

    return iconSvg && (
      <div style={{ width: size, height: size }}>
        {React.cloneElement(iconSvg, { fill: fillColor })}
      </div>
    );
  }
}

export default Icons;
