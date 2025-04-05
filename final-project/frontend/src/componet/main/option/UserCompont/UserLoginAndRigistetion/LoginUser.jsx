/* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { handleError, handleSuccess } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import { NavDataProvider } from '../../../../../app/feature/navdataSlide/NavDataSlide';
import { localhost } from '../../../../../localStores.js'

function LoginUser() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.UserPorsonData.Data)
    const emails = useRef(" ");
    const passwords = useRef(" ");
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = emails.current.value
        const password = passwords.current.value
        if (!email || !password) {
            return handleError('email and password are required')
        }
        try {
            const url = `${localhost}/eventmenegment/web/User/loginUser/${email}/${password}`;
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;

            if (success) {
                handleSuccess(message);
                // const data = (result.data.user)
                // localStorage.setItem('token', jwtToken);
                // localStorage.setItem('loggedInUser', name);
                dispatch(NavDataProvider());
                setTimeout(() => {
                    navigate('/')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                console.log(!success)
            }
            // alert(result.mes)
            emails.current.value = " "
            passwords.current.value = ""
        } catch (err) {
            handleError(err);
        }
    }
    return (
        <>
            <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700 mt-24">
                <div className="container h-full p-10">
                    <div
                        className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                        <div className="w-full">
                            <div
                                className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                                <div className="g-0 lg:flex lg:flex-wrap">
                                    {/* Left column container*/}
                                    <div className="px-4 md:px-0 lg:w-6/12">
                                        <div className="md:mx-6 md:p-12">
                                            {/*Logo */}
                                            <div className="text-center">
                                                <img
                                                    className="mx-auto w-48"
                                                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                    alt="logo" />
                                                <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                    We are The Lotus Team
                                                </h4>
                                            </div>
                                            <form>
                                                <p className="mb-4">Please login to your account</p>
                                                {/* Username input */}
                                                <div>
                                                    <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                                                    <div className=" flex items-center">
                                                        <input name="email" type="email" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" ref={emails} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                                    <div className=" flex items-center">
                                                        <input name="password" type="password" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" ref={passwords} />
                                                    </div>
                                                </div>
                                                {/*Submit button */}
                                                <div className="mb-12 pb-1 pt-1 text-center mt-3">
                                                    <button
                                                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                                        type="button"
                                                        data-twe-ripple-init
                                                        data-twe-ripple-color="light"
                                                        style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }} onClick={handleLogin}>
                                                        Log in
                                                    </button>
                                                    {/* Forgot password link */}

                                                </div>

                                                {/* Register button */}
                                                <div className="flex items-center justify-between pb-6">
                                                    <p className="mb-0 me-2">Dont have an account?</p>
                                                    <Link to={'/signUp'}
                                                        type="button"
                                                        className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                                                        data-twe-ripple-init
                                                        data-twe-ripple-color="light"
                                                    >
                                                        Register
                                                    </Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* <!-- Right column container with background and description--> */}
                                    <div
                                        className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                                        style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
                                        <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                            <h4 className="mb-6 text-xl font-semibold">
                                                We are more than just a company
                                            </h4>
                                            <p className="text-sm">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default LoginUser
