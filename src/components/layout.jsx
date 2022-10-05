import * as React from 'react';

function Layout(props) {
  return (
    <main className="">
      <div className="iframe-bg">
        <iframe src='https://my.spline.design/geopass-f1e486dc2429d875828d5e09b0e2e658/' frameborder='0' width='100%' height='100%'></iframe>
      </div>
      <div className="blender"></div>
      <div className="layout-content-holder">
        <div className="container mx-auto sm:px-8 sm:py-2">
          {props.children}
        </div>
      </div>
    </main>
  );
}

export default Layout;
 