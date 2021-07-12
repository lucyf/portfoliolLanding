import ContactComponent from "../../components/contact"
import ExperienceComponent from "../../components/experience";
import KnowledgeComponent from "../../components/knowledge";
import NavbarComponent from "../../components/navbar"
import PresentationComponent from "../../components/presentation";
import FooterComponent from "../../components/footer";

const SpanishContainer = () =>{
    return(
        <>
        <NavbarComponent/>
        <PresentationComponent/>
        <ExperienceComponent/>
        <KnowledgeComponent/>
        <ContactComponent/>
        <FooterComponent/>
        </>
    )

}

export default SpanishContainer;