import { Modal } from '../src/components/Modal/Modal';

export default {
  title: "Modal",
  component: Modal
}

export function Default() {
  return <Modal 
            modalHeading="Modal title"
            modalSubheading="Accept Notifications?"
            listDarkTitle="Outbound"
            listDarkItems={["Item 1", "Item 2", "Item 3", "Item 4"]}
            listLightTitle="Outbound"
            listLightItems={["Item 1", "Item 2", "Item 3"]}
          />
}