import { MsgDepositToSubaccount, MsgWithdrawFromSubaccount, MsgSendFromModuleToAccount } from "./transfer";
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgCreateTransfer, MsgCreateTransferResponse, MsgDepositToSubaccountResponse, MsgWithdrawFromSubaccountResponse, MsgSendFromModuleToAccountResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** CreateTransfer initiates a new transfer between subaccounts. */
  createTransfer(request: MsgCreateTransfer): Promise<MsgCreateTransferResponse>;
  /**
   * DepositToSubaccount initiates a new transfer from an `x/bank` account
   * to an `x/subaccounts` subaccount.
   */
  depositToSubaccount(request: MsgDepositToSubaccount): Promise<MsgDepositToSubaccountResponse>;
  /**
   * WithdrawFromSubaccount initiates a new transfer from an `x/subaccounts`
   * subaccount to an `x/bank` account.
   */
  withdrawFromSubaccount(request: MsgWithdrawFromSubaccount): Promise<MsgWithdrawFromSubaccountResponse>;
  /**
   * SendFromModuleToAccount initiates a new transfer from a module to an
   * `x/bank` account (should only be executed by governance).
   */
  sendFromModuleToAccount(request: MsgSendFromModuleToAccount): Promise<MsgSendFromModuleToAccountResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createTransfer = this.createTransfer.bind(this);
    this.depositToSubaccount = this.depositToSubaccount.bind(this);
    this.withdrawFromSubaccount = this.withdrawFromSubaccount.bind(this);
    this.sendFromModuleToAccount = this.sendFromModuleToAccount.bind(this);
  }
  createTransfer(request: MsgCreateTransfer): Promise<MsgCreateTransferResponse> {
    const data = MsgCreateTransfer.encode(request).finish();
    const promise = this.rpc.request("nemo_network.sending.Msg", "CreateTransfer", data);
    return promise.then(data => MsgCreateTransferResponse.decode(new BinaryReader(data)));
  }
  depositToSubaccount(request: MsgDepositToSubaccount): Promise<MsgDepositToSubaccountResponse> {
    const data = MsgDepositToSubaccount.encode(request).finish();
    const promise = this.rpc.request("nemo_network.sending.Msg", "DepositToSubaccount", data);
    return promise.then(data => MsgDepositToSubaccountResponse.decode(new BinaryReader(data)));
  }
  withdrawFromSubaccount(request: MsgWithdrawFromSubaccount): Promise<MsgWithdrawFromSubaccountResponse> {
    const data = MsgWithdrawFromSubaccount.encode(request).finish();
    const promise = this.rpc.request("nemo_network.sending.Msg", "WithdrawFromSubaccount", data);
    return promise.then(data => MsgWithdrawFromSubaccountResponse.decode(new BinaryReader(data)));
  }
  sendFromModuleToAccount(request: MsgSendFromModuleToAccount): Promise<MsgSendFromModuleToAccountResponse> {
    const data = MsgSendFromModuleToAccount.encode(request).finish();
    const promise = this.rpc.request("nemo_network.sending.Msg", "SendFromModuleToAccount", data);
    return promise.then(data => MsgSendFromModuleToAccountResponse.decode(new BinaryReader(data)));
  }
}