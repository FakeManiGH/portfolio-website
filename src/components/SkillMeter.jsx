import PropTypes from 'prop-types';

SkillMeter.propTypes = {
    language: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired
};

function SkillMeter({language, level}) {
    return (
        <div className='skill'>  
            <p className="skill-label">{language}</p>
            <div className="skill-meter"> 
                <div className="skill-meter-fill" style={{width: `${level}%`, background: `#5881b1`}}>{level}%</div>
            </div>
        </div>
    )
}

export default SkillMeter;