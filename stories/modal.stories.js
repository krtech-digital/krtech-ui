import { Modal } from '../src/components/Modal/Modal';

export default {
  title: "Modal",
  component: Modal
}

export function Default() {
  const modalListContent = [
    {
      title: "Outbound 1",
      items: ["Item 1", "Item 2", "Item 3", "Item 4"] 
    },
    {
      title: "Outbound 2",
      items: ["Item 1", "Item 2", "Item 3"]
    },
    {
      title: "Outbound 3",
      items: ["Item 1", "Item 2", "Item 3", "Item 4"] 
    },
    {
      title: "Outbound 4",
      items: ["Item 1", "Item 2", "Item 3"] 
    },
  ];
  return <Modal 
            modalHeading="Modal title"
            modalSubheading="Accept Notifications?"
            modalListContent={modalListContent}
          />
}