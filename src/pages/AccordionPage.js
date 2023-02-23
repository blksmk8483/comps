import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: '123a',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want.'
        },
        {
            id: '1gfdwa',
            label: 'Can I use JavaSript on a project?',
            content: 'You can use JavaScript on any project you want.'
        },
        {
            id: '12dfda',
            label: 'Can I use CSS on a project?',
            content: 'You can use CSS on any project you want.'
        }
    ]

    return <Accordion items={items} />;
};

export default AccordionPage;