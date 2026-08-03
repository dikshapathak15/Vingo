import Item from "../models/item.model";
import uploadOnCloudinary from "../utils/cloudinary";

export const addItem = async (req, res) => {
  try {
    const { name, category, foodType, price } = req.body;
    let image;
    if (req.file) {
      image = await uploadOnCloudinary(req.file.path);
    }
    const shop = await Shop.findOne({ owner: req.userId });
    if (!shop) {
      return req.status(400).json({ message: "shop not found" });
    }
    const item = await Item.create({
      name,
      category,
      foodType,
      price,
      image,
      shop: shop._id,
    });

    return req.status(201).json(item);
  } catch (error) {
    return req.status(500).json({ message: `add item error ${error}` });
  }
};

export const editItem = async (req, res) => {
  try {
    const ItemId = req.params.itemId;
    const { name, category, foodType, price } = req.body;
    let image;
    if (req.file) {
      image = await uploadOnCloudinary(req.file.path);
    }
    const item = await Item.findByIdAndUpdate(
      itemId,
      {
        name,
        category,
        foodType,
        price,
      },
      { new: true },
    );
    if (!item) {
      return req.status(400).json({ message: "item not found" });
    }

    return req.status(201).json(item);
  } catch (error) {
       return req.status(500).json({ message: `edit item error ${error}` });
  }
};
