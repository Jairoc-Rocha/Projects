import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import { getAgeFrom } from "./helpers/dateHelpers";
import { getNewId } from "./services/idServices";
import Timer from "./components/Timer";
import CheckboxInput from "./components/CheckboxInput";
import OnlineOffline from "./components/OnlineOffline";

function App() {
  const [name, setName] = useState("Raphael");
  const [birthDate, setBirthDate] = useState("1982-05-03");
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleBirthDateChange = (newBirthDate) => {
    setBirthDate(newBirthDate);
  };

  const toggleShowTimer = () => {
    setShowTimer((currentShowTimer) => !currentShowTimer);
  };

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    const toggleOnline = () => {
      setIsOnline(true);
    };

    const toggleOffline = () => {
      setIsOnline(false);
    };

    addEventListener("online", toggleOnline);
    addEventListener("offline", toggleOffline);

    return () => {
      removeEventListener("online", toggleOnline);
      removeEventListener("offline", toggleOffline);
    };
  }, []);

  return (
    <>
      <Header>react-hello</Header>

      <Main>
        <OnlineOffline isOnline={isOnline} />

        {showTimer && (
          <div className="text-right mt-1">
            <Timer />
          </div>
        )}

        <CheckboxInput
          labelDescription="Mostrar cronômetro"
          onCheckboxChange={toggleShowTimer}
        />

        <TextInput
          id={getNewId()}
          labelDescription="Digite o seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
          autoFocus
        />

        <DateInput
          id={getNewId()}
          labelDescription="Digite a sua data de nascimento:"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />
        <p>
          O seu nome é {name}, com {name.length} caracteres, e você possui{" "}
          {getAgeFrom(birthDate)} anos
        </p>
      </Main>
    </>
  );
}

export default App;
