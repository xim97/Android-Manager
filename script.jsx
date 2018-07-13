var jobs = [{
    name: "asdf1",
    description: "askldjfahsldhfk ajsldhfnasdf",
    complexity: "10"
},
{
    name: "asdf2",
    description: "askldjfahsldhfwe9 riwt9iwueporhlnv kajsldhf",
    complexity: "5"
},
{
    name: "asdf3",
    description: "asklddrjtoijgdnzklfnbio ;ao9srjjfah sldhfkajsldhf",
    complexity: "1"
}],
    androids = [{
        name: "qwer1",
        skills: ["ghjk", "dhg", "dfgh"],
        reliability: "10",
        status: "1"
    },
    {
        name: "qwer2",
        skills: ["ghjk", "dhg", "dfgh", "sfg"],
        reliability: "5",
        status: "1"
    },
    {
        name: "qwer3",
        skills: ["ghjk", "dhg", "dfgh", "fgyhjdng", "sadf"],
        reliability: "1",
        status: "1"
    }];


class SkillList extends React.Component {

    render() {
        return (
            <div class="skills">
                <span>Skills:<br /></span>
                {
                    this.props.skills.map(function (skill) {
                        return <span>{skill}<br /></span>
                    })
                }
            </div>
        );
    }
}


class Android extends React.Component {
    render() {
        return (
            <li>
                <p>{this.props.android.name}</p>
                <img alt="avatar" />
                <SkillList skills={this.props.android.skills} />
                <p>Reliability:{this.props.android.reliability}</p>
                <p>Status:{this.props.android.status}</p>
            </li>
        );
    }
}

class AndroidManager extends React.Component {

    render() {
        return (
            <div class="content">
                <h1>Android manager</h1>
                <div class="lists">
                    <Jobs />
                    <Androids />
                </div>
            </div>
        );
    }

}



class AndroidForm extends React.Component {
    render() {
        return (
            <form class="android-form">
                <input type="text" required maxlength="24" size="16" placeholder="android name" />
                <input type="file" required />
                <textarea type="text" required maxlength="255" placeholder="android skills"></textarea>
                <input value="Add android" type="submit" />
            </form>
        );
    }
}

class AndroidList extends React.Component {

    render() {
        return (
            <ul>
                {
                    androids.map(function (item) {
                        return <Android android={item} />
                    })
                }
            </ul>
        );
    }
}

class Androids extends React.Component {
    render() {
        return (
            <div class="androids">
                <h3>Androids</h3>
                <AndroidList />
                <AndroidForm />
            </div>
        );
    }
}

class Job extends React.Component {

    render() {
        return (
            <li>
                <p>Name:<br />{this.props.job.name}</p>
                <p>Description:<br />{this.props.job.description}</p>
                <p>Complexity:{this.props.job.complexity}</p>
            </li>
        );
    }
}

class JobForm extends React.Component {
    render() {
        return (
            <form class="job-form" name="job-form">
                <input type="text" required maxlength="16" size="16" placeholder="job name" />
                <textarea type="text" required maxlength="255" placeholder="job description"></textarea>
                <input type="text" required size="16" placeholder="job complexity level" />
                <input value="Add job" type="submit" />
            </form>
        );
    }
}

class Jobs extends React.Component {
    render() {
        return (
            <div class="jobs">
                <h3>Jobs</h3>
                <JobList />
                <JobForm />
            </div>
        );
    }
}

class JobList extends React.Component {
    render() {
        return (
            <ul>
                {
                    jobs.map(function (item) {
                        return <Job job={item} />
                    })
                }
            </ul>
        );
    }
}

ReactDOM.render(<AndroidManager />, document.body);