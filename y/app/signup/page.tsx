

function Signup() {
    return (

        <div className="bg-black grid  h-screen place-content-center  ">
        <div className="text-white bg-black justify-center flex mb-6 font-serif text-3xl">
        Blog Forge
            {/* <img src="logo.png" /> */}
        </div>
            <div  className="border border-zinc-700 p-3 m-3 rounded-lg">
                <div className="flex justify-center p-3 m-3 ">
                    <h1 className="text-white text-2xl">Sign Up </h1>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="">
                        <span className="text-white p-3 m-3 "> Username</span>

                        <input type="text" className="bg-black rounded-md text-white p-2 m-2 border-white border" placeholder="Enter username" name="" id="" />
                    </div>
                    <div>
                        <span className="text-white p-3 m-3 ">
                            Password
                        </span>
                        <input type="text" className="bg-black rounded-md text-white p-2 m-2 border-white border" placeholder="Enter Password" name="" id="" />
                    </div>
                </div>
                <div className="text-zinc-300 rounded-md  mt-8 p-2 mb-2 bg-slate-800 flex justify-center border-black ">
                    <button>
                        SignUp
                    </button>
                </div>
                <div className="flex justify-end text-white text-sm m-3">
                    <span><a href=""> Forgot password ?</a></span>
                </div>
            </div>
        </div>

    )
}

export default Signup
