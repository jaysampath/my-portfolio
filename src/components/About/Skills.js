import Skill from './Skill';
import { SKILLS } from '../../Constants';

const Skills = () => {
    return (
        <div className="skills">
            <div className="skillsGrid">
                {
                    SKILLS.map((key, index) => {
                        return <Skill 
                        source={key.svgUrl}
                        alt={key.name}
                        title={key.name}
                        key={index}
                        />
                    })
                }
            </div>            
        </div>
    )
}
export default Skills;