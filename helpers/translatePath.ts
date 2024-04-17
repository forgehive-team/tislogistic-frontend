const pathDictionary = {
    '/services/terminalnie-uslugi': '/services/terminal-services',
    '/services/morskie-gruzoperevozki': '/services/sea-freight',
    '/services/zheleznodorozhnye-perevozki': '/services/railway-freight',
    '/services/avtomobilnye-perevozki': '/services/automobile-transportation',
    '/services/aviaperevozki': '/services/air-freight',
    '/services/arenda-konteynerov': '/services/rental-containers',
    '/services/tamozhennoe-oformlenie': '/services/customs-clearance',
    '/services/multimodalnye-perevozki': '/services/multimodal-transportation',
    '/services/vneshneekonomicheskaya-deyatelnost':
        '/services/foreign-economic-activity',
    '/tarify-na-tamozhennoe-oformlenie-gruzov': '/custom-clearance-tariffs',
    '/politika-konfidencialnosti': '/privacy-policy',
};

export default function translatePath(fullPath: string, isRus: boolean) {
    const [path, queryParams] = fullPath.split(/\?(.+)/);
    const targetPath: string | undefined = isRus
        ? pathDictionary[path]
        : getKeyByValue(pathDictionary, path);
    if (!targetPath) {
        return fullPath;
    }
    return queryParams ? targetPath + '?' + queryParams : targetPath;
}

function getKeyByValue(object: Record<string, string>, value: string) {
    return Object.keys(object).find((key) => object[key] === value);
}
