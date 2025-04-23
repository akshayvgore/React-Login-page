function Dashboard(){
    return(
        <div className=" w-50 text-center bg-red-300 text-2xl  border border-2 rounded-4">
            <h1>Dashboard</h1>
            <dl>
            <p className="text-white fw-bold">Only visible after login </p>
                <dt>
                    Name:
                </dt>
                <dd>
                    Akshay v Gore
                </dd>
                <dt>
                    course:
                </dt>
                <dd>UI Full Stack </dd>
                <dd>
                <img
            src="../"
            alt="Profile"
            className="mx-auto rounded-xl shadow-md"
          />
                </dd>
            </dl>
        </div>
    );

}

export default Dashboard;