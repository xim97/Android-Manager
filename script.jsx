var androids = [{    
    name: "qwer1",
    skills: ["ghjk", "dhg", "dfgh"],
    reliability: 10,
    status: 1
},
{    
    name: "qwer2",
    skills: ["ghjk", "dhg", "dfgh", "sfg"],
    reliability: 5,
    status: 1
},
{
    name: "qwer3",
    skills: ["ghjk", "dhg", "dfgh", "fgyhjdng", "sadf"],
    reliability: 1,
    status: 1
}],
    jobs = [{
        name: "asdf1",
        description: "askldjfahsldhfk ajsldhfnasdf",
        complexity: 10,
        assignedAndroids: [androids[0], androids[1]]
    },
    {
        name: "asdf2",
        description: "askldjfahsldhfwe9 riwt9iwueporhlnv kajsldhf",
        complexity: 5,
        assignedAndroids: [androids[2], androids[1]]
    },
    {
        name: "asdf3",
        description: "asklddrjtoijgdnzklfnbio ;ao9srjjfah sldhfkajsldhf",
        complexity: 1,
        assignedAndroids: [androids[2], androids[1], androids[0]]
    },
    {
        name: "asdf4",
        description: "asklddrjtoijgdnzklfnbio ;ao9srjjfah sldhfkajsldhf",
        complexity: 1,
        assignedAndroids: [androids[2], androids[1], androids[0]]
    },
    {
        name: "asdf5",
        description: "asklddrjtoijgdnzklfnbio ;ao9srjjfah sldhfkajsldhf",
        complexity: 1,
        assignedAndroids: [androids[2], androids[1], androids[0]]
    }];

class AndroidManager extends React.Component {

    render() {
        return (
            <div class="content">
                <h1>Android manager</h1>
                <div class="lists">
                    <Jobs jobs={jobs} />
                    <Androids androids={androids} />
                </div>
            </div>
        );
    }

}

class SkillList extends React.Component {

    render() {
        return (
            <div class="skills">
                <span>Skills:<br /></span>
                {
                    this.props.skills.map(function (skill) {
                        return <span>{skill} </span>
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
                <Buttons index={this.props.index} delete={this.props.delete}/>
                <p>{this.props.android.name}</p>
                <img class="avatar" />
                <SkillList skills={this.props.android.skills} />
                <p>Reliability:{this.props.android.reliability}</p>
                <p>Status:{this.props.android.status}</p>
            </li>
        );
    }
}

class AndroidForm extends React.Component {
    render() {
        return (
            <form class="android-form">
                <input type="text" required maxlength="24" size="16" placeholder="android name" />
                <input type="file" required accept="image/*,image/jpeg,image/png" />
                <textarea type="text" required maxlength="255" placeholder="android skills"></textarea>
                <input value="Add android" type="submit" />
            </form>
        );
    }
}

class AndroidList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { androids: this.props.androids };
        this.deleteAndroid = this.deleteAndroid.bind(this);
    }

    render() {
        return (
            <ul>
                {
                    this.state.androids.map(function (item, index) {
                        return <Android index={index} delete={this.deleteAndroid} android={item} />
                    }, this)
                }
            </ul>
        );
    }

    deleteAndroid(deletingAndroidIndex) {
        var newAndroidList = this.state.androids.filter((item, index) => {
            return (index != deletingAndroidIndex)
        });

        this.setState({ androids: newAndroidList });
    }
}

class Androids extends React.Component {
    render() {
        return (
            <div class="androids">
                <h3>Androids</h3>
                <AndroidForm />
                <AndroidList androids={this.props.androids} />
            </div>
        );
    }
}

class Job extends React.Component {

    render() {
        return (
            <li>
                <Buttons index={this.props.index} delete={this.props.delete} />
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
                <JobForm />
                <JobList jobs={this.props.jobs} />
            </div>
        );
    }
}

class JobList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { jobs: this.props.jobs };
        this.deleteJob = this.deleteJob.bind(this);
    }


    render() {
        return (
            <ul>
                {
                    this.state.jobs.map(function (item, index) {
                        return <Job index={index} delete={this.deleteJob} job={item} />
                    }, this)
                }
            </ul>
        );
    }

    deleteJob(deletingJobIndex) {
        var newJobList = this.state.jobs.filter((item, index) => {
            return (index != deletingJobIndex)
        });

        this.setState({ jobs: newJobList });
    }


}

class EditButton extends React.Component {
    render() {
        return (
            <img src="images/edit-button.svg" />
        );
    }
}

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    }

    render() {
        return (
            <img onClick={this.onDeleteButtonClick} src="images/delete-button.svg" />
        );
    }

    onDeleteButtonClick(e) {
        this.props.delete(this.props.index);
    }

}

class InformationButton extends React.Component {
    render() {
        return (
            <img src="images/info-button.svg" />
        );
    }
}

class Buttons extends React.Component {
    render() {
        return (
            <div class="buttons">
                <InformationButton index={this.props.index} />
                <EditButton index={this.props.index} />
                <DeleteButton index={this.props.index} delete={this.props.delete} />
            </div>
        );
    }
}

ReactDOM.render(<AndroidManager />, document.body);