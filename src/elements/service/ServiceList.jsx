import React ,{ Component }from "react";
import { FiChrome , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiChrome />,
        title: 'Search Engine Optimisation',
        description: 'Crafting quality content to drive organic traffic to your website, establishing a strong online presence!'
    },
    {
        icon: <FiLayers />,
        title: 'Website Development',
        description: 'Customized and responsive websites to stand out from the rest. Websites developed are mobile friendly, providing an optimal user experience on all all devices'
    },
    {
        icon: <FiUsers />,
        title: 'User Interface Design',
        description: 'I specialised in minimalist designs, delivering an interactive and unique experience to users '
    },

]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row service-main-wrapper">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a>
                                <div className="service service__style--2 text-left bg-gray">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
