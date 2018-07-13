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

class Android extends React.Component {
    render() {
        return (
            <li>
                <p>{this.props.name}</p>
                <img alt="avatar" />
                <div class="tags">
                    <span>Skills:</span>
                    <span>tag1</span>
                    <span>tag2</span>
                    <span>tag3</span>
                    <span>tag4</span>
                </div>
                <p>Reliability:{this.props.reliability}</p>
                <p>Status:{this.props.status}</p>
            </li>
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
                    [1, 2, 3, 4].map(function (value) {
                        return <Android name={"asdf" + value} reliability={10 - value} status={1} />
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
                <p>{this.props.name}</p>
                <p>{this.props.description}</p>
                <p>{this.props.complexity}</p>
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
                    [1, 2, 3].map(function (value) {
                        return <Job name={"asdf" + value} description={"asdfasdf" + value} complexity={"qwrqw" + value} />
                    })
                }
            </ul>
        );
    }
}

ReactDOM.render(<AndroidManager />, document.body);