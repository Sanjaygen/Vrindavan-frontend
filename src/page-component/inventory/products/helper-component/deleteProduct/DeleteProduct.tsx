import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { useDeleteProduct } from "@/hooks/useProducts";

interface DeleteConfirmationDialogProps {
  open: boolean;
  productId: string | null;
  onClose: () => void;
}

const DeleteConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({
  open,
  onClose,
  productId,
}) => {
  const deleteProductMutation = useDeleteProduct();

  const confirmDelete = () => {
    if (productId) {
      deleteProductMutation.mutate(productId);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>Are you sure you want to delete this item?</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            confirmDelete();
            onClose();
          }}
          color="primary"
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
