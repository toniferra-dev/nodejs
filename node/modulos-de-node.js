const so = require('node:os');

console.log('\n═══════════════════════════════════════════════════════════');
console.log('               INFORMACIÓN DEL SISTEMA OPERATIVO               ');
console.log('═══════════════════════════════════════════════════════════\n');

console.log('📌 SISTEMA OPERATIVO');
console.log('   • Plataforma:', so.platform());
console.log('   • Arquitectura:', so.arch());

console.log('\n💾 MEMORIA');
console.log('   • Total:', (so.totalmem() / (1024 ** 3)).toFixed(2), 'GB');
console.log('   • Libre:', (so.freemem() / (1024 ** 3)).toFixed(2), 'GB');
console.log('   • En uso:', ((so.totalmem() - so.freemem()) / (1024 ** 3)).toFixed(2), 'GB');

console.log('\n🏠 DIRECTORIOS');
console.log('   • Home:', so.homedir());

console.log('\n⏱️  TIEMPO DE ACTIVIDAD');
const uptimeHours = Math.floor(so.uptime() / 3600);
const uptimeMinutes = Math.floor((so.uptime() % 3600) / 60);
console.log(`   • ${uptimeHours} horas y ${uptimeMinutes} minutos`);

console.log('\n🖥️  PROCESADOR');
console.log('   • Núcleos:', so.cpus().length);
console.log('   • Modelo:', so.cpus()[0].model);

console.log('\n═══════════════════════════════════════════════════════════\n');