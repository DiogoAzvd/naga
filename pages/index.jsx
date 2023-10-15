export default function Main() {
    return (
        <div id="main">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Patrick Hand"></link>
            <Introduction />
            <Profile />
        </div>
    );
}


function Introduction() {
    return (
        <div id="introduction">
            <div id="introduction_text">
                <div id="introduction_title">
                    <div>Welcome And Thanks For Visiting</div>
                    <div>Here I will be posting my projects and some dummy scripts</div>
                </div>

                <div id="introduction_list">
                    <Moon_list text = "Started learning programming since November 2022" />
                </div>

                <div id="introduction_contact">
                    <div id="introduction_contact_wrapper">
                        <div id="discord"></div>
                        <div>dummy_naga</div>
                    </div>
                </div>
            </div>

            <div id="introduction_link">
                <div className="link">Projects</div>
                <div className="link">Dummy Scripts</div>
            </div>
        </div>
    );
}


function Profile() {
    return (
        <div id="profile"></div>
    );
}


function Moon_list({text}) {
    return (
        <div className="moon_list">
            <div className="moon_icon"></div>
            <div>{text}</div>
        </div>
    );
}


