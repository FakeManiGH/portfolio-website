import PropTypes from 'prop-types';

SkillMeter.propTypes = {
    skill: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired
};

// Change color of the skill-meter-fill based on the level
// 0-25: red
// 26-50: orange
// 51-100: green

function getSkillColor(level) {
    if (level <= 25) {
        return '#D62C27';
    } else if (level <= 50) {
        return '#D68F27';
    } else {
        return '#348C3D';
    }
}



function SkillMeter({skill, level}) {
    const skillColor = getSkillColor(level);

    return (
        <div className='skill'>  
            <p className="skill-label">{skill}</p>
            <div className="skill-meter"> 
                <div className="skill-meter-fill" style={{width: `${level}%`, backgroundColor: skillColor}}>{level}%</div>
            </div>
        </div>
    )
}

export default SkillMeter;