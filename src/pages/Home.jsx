import WorkItem from "../components/WorkItem"

const apps = [
    {
        title: 'BookJudge',
        description:'An application that allows users to rate books they have read and share those reviews with others',
        image: '/images/book.jpg',
        technologies: 'HTML | CSS | JS | DayJS | Express | Postgres | Sequelize | Sessions'
    },
    {
        title: 'Marvel Mantras',
        description:'An application that allows individuals to get a qoute from their favorite marvel character',
        image: '/images/spider.jpg',
        technologies: 'HTML | CSS | JS | DayJS | Express | Postgres | Sequelize | Sessions'
    },
    {
        title: 'Application',
        description:'A full stack blog application with authenication',
        image: '',
        technologies: 'HTML | CSS | JS | DayJS | Express | Postgres | Sequelize | Sessions'
    },
    {
        title: 'Application',
        description:'A full stack blog application with authenication',
        image: '/images/',
        technologies: 'HTML | CSS | JS | DayJS | Express | Postgres | Sequelize | Sessions'
    }
]

function Home () {
    //Loop over the apps array and convert each object into a <WorkItem /> component tag
    const workItems = apps.map((workItemObj, index) => {
        return <WorkItem key={index} data={workItemObj} />
    });

    return (
        <>
        <body className="bg-1">
            <section className="home-hero column align-center">
                <img src="/images/IMG_2184.jpg" alt="" />

                <h1 className="text-center">Dev and Designer</h1>
            </section>

            <section className="work">
                {workItems}
            </section>
        </body>
        </>
    )
}     

export default Home
