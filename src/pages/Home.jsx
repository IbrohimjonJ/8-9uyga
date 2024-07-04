import { useSelector } from "react-redux";
import { useCollection } from "../hooks/useCollection";
import { Link } from "react-router-dom";
import Create from "./Create";
import CreateRetsep from "../componets/CreateRetsep";

function Home() {
  const { user } = useSelector((state) => state.user);
  const { data } = useCollection("Recipes", ["uid", "==", user.uid]);
  console.log(data);
  return (

    <div className="w-full bg-cover bg-center h-screen pt-5 bg-[url('././im.jpg')] dark:bg-[url('')]">
      <div>
        {data ? (
          <div className="flex justify-center">
            <div>
              <h1 className="text-3xl mb-5 text-white">Recipe</h1>
              {data && <CreateRetsep data={data} />}
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:mb-20 mb-0 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-auto text-white">
            <Link
              to="/Create"
              className="card rounded-md glass sm:w-12 w-12 place-content-center grid justify-center"
            >
              <div className="">
                <h1 className="text-2xl text-center p-10 bg-slate-200 border rounded-full w-52 h-full flex place-content-center justify-center">
                  +
                </h1>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;