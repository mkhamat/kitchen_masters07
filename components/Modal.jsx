import ReactModal from "react-modal";
export default function OrderModal({ modalSwitch, closeModal, item, setFeedback, feedback, handleSubmit }) {
  return (
    <ReactModal
      isOpen={modalSwitch}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "transparent",
          inset: 0,
        },
        content: {
          inset: 0,
          maxWidth: "min-content",
          height: "min-content",
          margin: "auto",
          border: "none",
          boxShadow: "0px 0px 10px gray",
        },
      }}
    >
      <div className="font-bold pb-4">{feedback.item}</div>
      <div className="text-black">
        Укажите Ваш номер телефона и мы Вам перезвоним для
        уточнения деталей:
      </div>
      <input
        className="border-[#66A018] border-2 rounded-md p-2 my-2"
        type="text"
        placeholder="Номер телефона"
        onChange={(e) => setFeedback({ ...feedback, number: e.target.value })}
      />
      <input
        className="border-[#66A018] border-2 rounded-md p-2 my-2"
        type="text"
        placeholder="Ваше имя"
        onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
      />
      <input
        className="border-[#66A018] border-2 rounded-md p-2 my-2"
        type="text"
        placeholder="E-mail"
        onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
      />
      <button
        onClick={(e) => handleSubmit(e)}
        className="bg-[#66A018] text-[#fff] font-[500] py-3 px-10 rounded-md"
      >
        Отправить
      </button>
    </ReactModal>
  )
}