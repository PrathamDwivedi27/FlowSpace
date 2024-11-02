"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";
import { Input } from "@/components/ui/input";

export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal();

  const handleClose = () => {};

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a Workspace</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <Input/>
        </form>
      </DialogContent>
    </Dialog>
  );
};
