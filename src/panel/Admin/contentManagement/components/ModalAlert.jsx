const ModalAlert = ({ confirmDelete, setShowModal }) => {
  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex align-items-center justify-content-center bg-warning">
            <img src="assets/images/icons/trashIconAnimated.gif" alt="trash icon" width="120px" />
          </div>
          <div className="modal-body text-center">
            <p>آیا از حذف این محتوا مطمئنید؟</p>
            <p className="fs-11">توجه داشته باشید که امکان بازیابی اطلاعات حذف‌شده وجود ندارد</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-sm btn-secondary" onClick={() => setShowModal(false)}>
              لغو
            </button>
            <button type="button" className="btn btn-sm btn-danger" onClick={confirmDelete}>
              حذف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAlert;
