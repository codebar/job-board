
const BeforePostCheckList = () => {
    return (
        <div className="before-post-checklist-box">
            <p>Before posting make sure that:</p>
            <ul>
                <li>
                    <input type='checkbox'></input>
                    <p>The position is suitable for people looking for internships, apprenticeships or junior roles that will enable them to build yp their career</p>
                </li>
                <li>
                    <input type='checkbox'></input>
                    <p>There is no degree requirement</p>
                </li>
                <li>
                    <input type='checkbox'></input>
                    <p>There is no previous expereince requirement</p>
                </li>
                <li>
                    <input type='checkbox'></input>
                    <p>The job description details the work that will have to be undertaken</p>
                </li>
                <li>
                    <input type='checkbox'></input>
                    <p>The ob description is short and to the point</p>
                </li>
                <li>
                    <input type='checkbox'></input>
                    <p>The job pays an appropriate salary</p>
                </li>
                <li>
                    <input type='checkbox'></input>
                    <p>You have made the <a href='/'>required payment of £50</a></p>
                </li>
                <p>For an additional £200 you can have your job listing featured in our newsletter and made available to an audience of over 10000 students and coaches. To find out more details and when our next newsletter is due send us an email at <a href='hello@codebar.io'>hello@codebar.io</a>.</p>
            </ul>
        </div>
    );
};

export default BeforePostCheckList;