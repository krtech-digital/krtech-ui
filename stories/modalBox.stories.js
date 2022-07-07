import { ModalBox } from '../src/components/ModalBox/ModalBox';

export default {
  title: "ModalBox",
  component: ModalBox,
};

export function Default() {
  const modalBoxHeading = "Modal Title";
  const modalBoxSubheading = "Accept Notifications?";
  const modalBoxText = `Lorem ipsum, or lipsum as it is sometimes known, 
  is dummy text used in laying out print, graphic or web designs.`;

  return (
    <ModalBox 
      modalBoxHeading={modalBoxHeading} 
      modalBoxSubheading={modalBoxSubheading} 
      modalBoxText={modalBoxText} 
    />
  )
}
