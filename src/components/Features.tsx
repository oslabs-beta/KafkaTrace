import FeatureBlock from "./FeatureBlock";

export default function Features () {
    return (
        <section className='md:py-16 md:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8'>
        {[
            {
            icon: '⚡',
            title: 'Lightweight',
            description:
                'Quick to Install and Easy To Implement - Get Started Effortlessly',
            },
            {
            icon: '📦',
            title: 'All-In-One',
            description: 'Modern Dashboards to Display Apache Kafka Client Instrumentation',
            },
            { 
            icon: '💻',
            title: 'Privately Hosted',
            description:
                'Direct Integration With Your Local Computer for Simplicity and Security',
            },
        ].map((feature, index) => (
            <FeatureBlock key={index} {...feature} />
        ))}
        </section>
    )
};