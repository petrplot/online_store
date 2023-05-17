module.exports.getAll = async (model) => {

  const dataObj = [];
  dataObj = await model.findAll();
  return dataObj;
};

module.exports.getById = async (data, model) => {

  const { id } = data.params;

  if (id) {

    const dataObj = await model.findOne({ where: { id } });

    if (dataObj) {

      return dataObj;

    } else {

      return 'Запись не существует';

    }

  } else {

    return 'Неверный параметр';

  }

};

module.exports.create = async (data, model) => {

  const dataObj = await model.create(data);
  if (dataObj) {
    return dataObj;
  } else {
    return 'объект не создан';
  }


};

module.exports.update = async (id, data, model) => {

  await model.update(data, {
    where: { id }
  });
  const dataObj = await model.findOne({ where: { id } });
  return dataObj;
};

module.exports.remove = async (data, model) => {

  const { id } = data.params;

  if (id) {

    const removeObj = await model.destroy({ where: { id } });
    console.log(removeObj);// написать проверку
    return { code: 200, message: 'запись удалена' };

  } else {

    return { code: 404, message: 'Неверный параметр' };

  }

};
