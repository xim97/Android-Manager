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
                    <Jobs />
                    <Androids />
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
                <Buttons isNeedInfoButton={false} index={this.props.index} delete={this.props.delete} />
                <p>{this.props.android.name}</p>
                <img class="avatar" title={'avatar of ' + this.props.android.name} src="images/1.jpg" />
                <SkillList skills={this.props.android.skills} />
                <p>Reliability:{this.props.android.reliability}</p>
                <p>Status:{this.props.android.status}</p>
            </li>
        );
    }
}

class AndroidForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", skills: [], imageURL: "", reliability: 10, status: 1 };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSkills = this.onChangeSkills.bind(this);
        this.handleSubmitAndroid = this.handleSubmitAndroid.bind(this);
    }
    onChangeName(e) {
        var value = e.target.value.trim();
        this.setState({ name: value });
    }

    onChangeSkills(e) {
        var value = e.target.value.split(',');
        value.every(item => item.trim());
        value.filter(item => item.length > 0);
        this.setState({ skills: value });
    }

    validateName(name) {
        return (name.length >= 5 && name.search(/[^A-Z^a-z^\d^-]/) == -1);
    }

    handleSubmitAndroid(e) {
        e.preventDefault();
        var newAndroid = {
            name: this.state.name,
            skills: this.state.skills,
            imageURL: this.state.imageURL,
            reliability: this.state.reliability,
            status: this.state.status
        };
        if (this.validateName(newAndroid.name)) {
            this.props.addAndroid(newAndroid);
            this.setState({
                name: "",
                skills: []
            });
        } else {
            alert("Name of new android is unavaible.It should be more than 5 symbols and contain only letters, digits and hyphen.");
        }
    }

    render() {
        return (
            <form class="android-form" onSubmit={this.handleSubmitAndroid} name="android-form">
                <input type="text" value={this.state.name} onChange={this.onChangeName} required maxlength="24" size="16" placeholder="android name" />
                <input type="file" accept="image/*,image/jpeg,image/png" />
                <textarea type="text" value={this.state.skills} onChange={this.onChangeSkills} required maxlength="255" placeholder="android skills"></textarea>
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
                    this.props.androids.map(function (item, index) {
                        return <Android index={index} delete={this.props.delete} android={item} />
                    }, this)
                }
            </ul>
        );
    }

}

class Androids extends React.Component {
    constructor(props) {
        super(props);
        this.state = { androids: androids };
        this.addAndroid = this.addAndroid.bind(this);
        this.deleteAndroid = this.deleteAndroid.bind(this);
    }

    render() {
        return (
            <div class="androids">
                <h3>Androids</h3>
                <AndroidForm addAndroid={this.addAndroid} />
                <AndroidList delete={this.deleteAndroid} androids={this.state.androids} />
            </div>
        );
    }

    addAndroid(newAndroid) {
        var newAndroidList = this.state.androids;
        newAndroidList.unshift(newAndroid);
        this.setState({ androids: newAndroidList })
    }

    deleteAndroid(deletingAndroidIndex) {
        var newAndroidList = this.state.androids.filter((item, index) => {
            return (index != deletingAndroidIndex)
        });        
        this.setState({ androids: newAndroidList });
    }
}

class Job extends React.Component {

    render() {
        return (
            <li>
                <Buttons isNeedInfoButton={true} index={this.props.index} delete={this.props.delete} />
                <p>Name:<br />{this.props.job.name}</p>
                <p>Description:<br />{this.props.job.description}</p>
                <p>Complexity:{this.props.job.complexity}</p>
            </li>
        );
    }
}

class JobForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", description: "", complexity: "" };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeComplexity = this.onChangeComplexity.bind(this);
        this.handleSubmitJob = this.handleSubmitJob.bind(this);
    }
    onChangeName(e) {
        var value = e.target.value.trim();
        this.setState({ name: value });
    }

    onChangeDescription(e) {
        var value = e.target.value;
        this.setState({ description: value });
    }

    onChangeComplexity(e) {
        var value = e.target.value.trim();
        this.setState({ complexity: value });
    }

    validateName(name) {
        return (name.length >= 2 && name.search(/[^A-Z^a-z^\d^-]/) == -1);
    }

    handleSubmitJob(e) {
        e.preventDefault();
        var newJob = {
            name: this.state.name,
            description: this.state.description,
            complexity: this.state.complexity
        };
        if (this.validateName(newJob.name)) {
            this.props.addJob(newJob);
            this.setState({
                name: "",
                description: "",
                complexity: ""
            });
        } else {
            alert("Name of new job is unavaible.It should be more than 2 symbols and contain only letters, digits and hyphen.");
        }
    }

    render() {
        return (
            <form class="job-form" onSubmit={this.handleSubmitJob} name="job-form">
                <input type="text" value={this.state.name} onChange={this.onChangeName} required maxlength="16" placeholder="job name" />
                <textarea type="text" value={this.state.description} onChange={this.onChangeDescription} required maxlength="255" placeholder="job description"></textarea>
                <input type="text" value={this.state.complexity} onChange={this.onChangeComplexity} required placeholder="job complexity level" />
                <input value="Add job" type="submit" />
            </form>
        );
    }
}

class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { jobs: jobs };
        this.addJob = this.addJob.bind(this);
        this.deleteJob = this.deleteJob.bind(this);
    }

    render() {
        return (
            <div class="jobs">
                <h3>Jobs</h3>
                <JobForm addJob={this.addJob} />
                <JobList delete={this.deleteJob} jobs={this.state.jobs} />
            </div>
        );
    }

    addJob(newJob) {
        var newJobList = this.state.jobs;
        newJobList.unshift(newJob);
        this.setState({ jobs: newJobList })
    }

    deleteJob(deletingJobIndex) {
        var newJobList = this.state.jobs;
        newJobList = newJobList.filter((item, index) => {
            return (index != deletingJobIndex)
        });
        this.setState({ jobs: newJobList });
    }

}

class JobList extends React.Component {

    render() {
        return (
            <ul>
                {
                    this.props.jobs.map(function (item, index) {
                        return <Job index={index} delete={this.props.delete} job={item} />
                    }, this)
                }
            </ul>
        );
    }

}

class EditButton extends React.Component {
    render() {
        return (
            <img title="Edit" src="images/edit-button.svg" />
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
            <img title="Delete" onClick={this.onDeleteButtonClick} src="images/delete-button.svg" />
        );
    }

    onDeleteButtonClick(e) {
        this.props.delete(this.props.index);
    }

}

class InformationButton extends React.Component {
    render() {
        return (
            <img title="Get information" src="images/info-button.svg" />
        );
    }
}

class Buttons extends React.Component {
    render() {
        if (this.props.isNeedInfoButton) {
            return (
                <div class="buttons">
                    <InformationButton index={this.props.index} />
                    <EditButton index={this.props.index} />
                    <DeleteButton index={this.props.index} delete={this.props.delete} />
                </div>
            );
        } else {
            return (
                <div class="buttons">
                    <EditButton index={this.props.index} />
                    <DeleteButton index={this.props.index} delete={this.props.delete} />
                </div>
            );
        }
    }
}

ReactDOM.render(<AndroidManager />, document.body);