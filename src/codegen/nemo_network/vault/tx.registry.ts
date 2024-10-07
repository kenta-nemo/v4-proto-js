import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDepositToMegavault, MsgUpdateDefaultQuotingParams, MsgSetVaultParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/nemo_network.vault.MsgDepositToMegavault", MsgDepositToMegavault], ["/nemo_network.vault.MsgUpdateDefaultQuotingParams", MsgUpdateDefaultQuotingParams], ["/nemo_network.vault.MsgSetVaultParams", MsgSetVaultParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    depositToMegavault(value: MsgDepositToMegavault) {
      return {
        typeUrl: "/nemo_network.vault.MsgDepositToMegavault",
        value: MsgDepositToMegavault.encode(value).finish()
      };
    },
    updateDefaultQuotingParams(value: MsgUpdateDefaultQuotingParams) {
      return {
        typeUrl: "/nemo_network.vault.MsgUpdateDefaultQuotingParams",
        value: MsgUpdateDefaultQuotingParams.encode(value).finish()
      };
    },
    setVaultParams(value: MsgSetVaultParams) {
      return {
        typeUrl: "/nemo_network.vault.MsgSetVaultParams",
        value: MsgSetVaultParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    depositToMegavault(value: MsgDepositToMegavault) {
      return {
        typeUrl: "/nemo_network.vault.MsgDepositToMegavault",
        value
      };
    },
    updateDefaultQuotingParams(value: MsgUpdateDefaultQuotingParams) {
      return {
        typeUrl: "/nemo_network.vault.MsgUpdateDefaultQuotingParams",
        value
      };
    },
    setVaultParams(value: MsgSetVaultParams) {
      return {
        typeUrl: "/nemo_network.vault.MsgSetVaultParams",
        value
      };
    }
  },
  fromPartial: {
    depositToMegavault(value: MsgDepositToMegavault) {
      return {
        typeUrl: "/nemo_network.vault.MsgDepositToMegavault",
        value: MsgDepositToMegavault.fromPartial(value)
      };
    },
    updateDefaultQuotingParams(value: MsgUpdateDefaultQuotingParams) {
      return {
        typeUrl: "/nemo_network.vault.MsgUpdateDefaultQuotingParams",
        value: MsgUpdateDefaultQuotingParams.fromPartial(value)
      };
    },
    setVaultParams(value: MsgSetVaultParams) {
      return {
        typeUrl: "/nemo_network.vault.MsgSetVaultParams",
        value: MsgSetVaultParams.fromPartial(value)
      };
    }
  }
};