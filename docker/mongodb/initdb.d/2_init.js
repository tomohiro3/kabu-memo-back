db.stocks.updateMany({ code_of_group: '' }, { $set: { code_of_group: null } });
db.stocks.updateMany({ group: '' }, { $set: { group: null } });
