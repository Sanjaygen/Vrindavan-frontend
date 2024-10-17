import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { useDeleteCategories } from "@/hooks/useCategories";

interface DeleteCategoriesProps {
  open: boolean;
  categoriesId: string | null;
  onClose: () => void;
}

const DeleteCategories: React.FC<DeleteCategoriesProps> = ({
  open,
  onClose,
  categoriesId,
}) => {
  const deleteCategoriesIdMutation = useDeleteCategories();

  const confirmDelete = () => {
    if (categoriesId) {
      deleteCategoriesIdMutation.mutate(categoriesId);
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

export default DeleteCategories;
