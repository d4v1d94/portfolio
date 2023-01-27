import './index.scss';
const Experience = () => {
    return(
        <div className='skills'>
            <h2>EXPERIENCIA LABORAL</h2>
            <div className='skill'>
                <div className='skill-name'>INDEPENDIENTE</div>
                <div className='skill-bar'>
                    <div className='skill-per skill-in' per='6 meses'></div>
                </div>
            </div>
            <div className='skill'>
                <div className='skill-name'>CONDOMEDIA</div>
                <div className='skill-bar'>
                    <div className='skill-per skill-con' per='12 meses'></div>
                </div>
            </div>
            <div className='skill'>
                <div className='skill-name'>COMPUMAX (ACTUAL)</div>
                <div className='skill-bar'>
                    <div className='skill-per skill-com' per='13 meses'></div>
                </div>
            </div>
        </div>
    );
}

export default Experience;