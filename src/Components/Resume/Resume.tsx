import {TOOLBAR_HEIGHT} from '../App/App';

const Resume = () => {
  return (
    <>
      <object
        data="https://drive.google.com/viewerng/
viewer?embedded=true&url=http://leealandennis.com/LeeDennis.pdf"
        style={{
          height: 'calc(100vh - ' + TOOLBAR_HEIGHT + ')',
          width: '100vw',
        }}
      />
    </>
  );
};

export default Resume;
