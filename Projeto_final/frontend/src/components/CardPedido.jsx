import { CalendarFold, User, Watch, Bike, CheckCircle2 } from "lucide-react";

const CardPedido = ({ id, name, date, orderTime, deliveredTime, total }) => {
  return (
    <div className="order-card">
      <div className="order-card-header">
        <p className="font-bold">#{id}</p>
        <select name="" id="" className="font-bold">
          <option value="" defaultChecked disabled>
            Pendente
          </option>
          <option value="">Retirado</option>
          <option value="">Cancelado</option>
        </select>
      </div>

      <div className="order-card-content">
        <div className="order-status-strip">
          <span className="status-dot"></span>
          <span>Em preparo</span>
        </div>
        <div className="icon-row">
          <User size={16} />
          <p className="text-xs">{name}</p>
        </div>
        <div className="icon-row">
          <CalendarFold size={16} />
          <p className="text-xs">{date}</p>
        </div>

        <div className="order-time-row">
          <div className="icon-row">
            <Watch size={16} />
            <p className="text-xs">{orderTime}</p>
          </div>
          <div className="icon-row">
            <Bike size={16} />
            <p className="text-xs">{deliveredTime ? deliveredTime : "-"}</p>
          </div>
        </div>

        <div className="order-progress">
          <span></span>
          <span></span>
          <CheckCircle2 size={18} />
        </div>

        <p className="order-total">R${total}</p>
      </div>
    </div>
  );
};

export default CardPedido;
